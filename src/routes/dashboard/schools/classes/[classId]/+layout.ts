import type { LayoutLoad } from "./$types";
import { pb } from "$lib/services/pb";
import type { RecordModel } from "pocketbase";
import { calculatePoints } from "$lib/services/points"; // Import the new function

// Define interfaces for better type safety (adjust properties based on your actual schema)
interface Activity extends RecordModel {
    user: string; // Assuming 'user' field stores the student's ID
    type: "walking" | "running" | "hiking" | "cycling" | "skating" | string; // Allow string for flexibility, but handle known types
    distance: number; // Assuming distance is in meters
    duration: number; // Assuming duration is in seconds
    minAltitude: number; // Assuming altitude is in meters
    maxAltitude: number; // Assuming altitude is in meters
    // Add other activity properties if needed
}

interface Student extends RecordModel {
    id: string;
    // Add other student properties if needed
    activityPoints?: ActivityPoints; // Add the property we'll be calculating
}

interface Classroom extends RecordModel {
    id: string;
    expand?: {
        students?: Student[];
        school?: RecordModel; // Or a more specific School interface
    };
    // Add other classroom properties if needed
}

interface ActivityPoints {
    total: number;
    walking: number;
    running: number;
    hiking: number;
    cycling: number;
    skating: number;
    // Add other categories if needed, or make it a Record<string, number>
}

// No longer needed as logic is in calculatePoints
// const pointsPerKmThreshold: Record<Activity["type"], number> = { ... };

export const load: LayoutLoad = async ({ params }) => {
    // 1. Fetch classroom and expand students and school in one go
    const classroom = await pb.collection("classrooms").getOne<Classroom>(params.classId, {
        expand: "students,school"
    });

    const students = classroom.expand?.students;

    // If no students, return early
    if (!students || students.length === 0) {
        if (students) {
            students.forEach(student => {
                student.activityPoints = createInitialActivityPoints();
            });
        }
        return { classroom };
    }

    // 2. Extract all student IDs
    const studentIds = students.map(student => student.id);

    // 3. Fetch all activities for all students in this classroom in a SINGLE query
    const filterString = `(${studentIds.map(id => `user="${id}"`).join(" || ")})`;

    // Ensure you select the necessary fields if not fetching everything by default
    // Example: fields: "id,user,type,distance,duration,minAltitude,maxAltitude,created"
    const allActivities = await pb.collection("activities").getFullList<Activity>({
        filter: filterString,
        // Consider adding fields parameter if your activities collection has many unused fields
        // fields: "user,type,distance,duration,minAltitude,maxAltitude"
    });

    // 4. Process activities and assign points
    const studentPointsMap = new Map<string, ActivityPoints>();

    // Initialize points for all students
    students.forEach(student => {
        studentPointsMap.set(student.id, createInitialActivityPoints());
    });

    // Calculate points using the imported function
    for (const activity of allActivities) {
        const studentId = activity.user;
        const currentPoints = studentPointsMap.get(studentId);

        // Check if we have data for this student and required activity fields exist
        if (currentPoints &&
            activity.type)
        {
            // Call the external function to calculate points for this specific activity
            const pointsEarned = calculatePoints(
                activity.type,
                activity.duration,
                activity.distance,
                activity.minAltitude,
                activity.maxAltitude
            );

            if (pointsEarned > 0) {
                // Check if the activity type is one of the keys we track
                if (activity.type in currentPoints) {
                    // Use type assertion because we checked `activity.type in currentPoints`
                    currentPoints[activity.type as keyof Omit<ActivityPoints, 'total'>] += pointsEarned;
                } else {
                    // Optional: Handle unexpected activity types if necessary
                    console.warn(`Activity type "${activity.type}" not explicitly tracked in ActivityPoints for activity ${activity.id}. Adding to total only.`);
                }
                currentPoints.total += pointsEarned;
            }
        } else {
            console.warn(`Skipping activity ${activity.id} for user ${studentId}: Missing required data (type, distance, duration, min/maxAltitude) or student not found in map.`);
        }
    }

    // 5. Assign calculated points back to the student objects
    students.forEach(student => {
        student.activityPoints = studentPointsMap.get(student.id) ?? createInitialActivityPoints();
    });

    // The classroom object now has students with their activityPoints calculated
    return {
        classroom
    };
};

// Helper function to initialize points object
function createInitialActivityPoints(): ActivityPoints {
    return {
        total: 0,
        walking: 0,
        running: 0,
        hiking: 0,
        cycling: 0,
        skating: 0
    };
}
