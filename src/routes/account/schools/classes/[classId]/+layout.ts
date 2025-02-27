import type { LayoutLoad } from "./$types";
import { pb } from "$lib/services/pb";

export const load: LayoutLoad = async ({ params }) => {
    const classroom = await pb.collection("classrooms").getOne(params.classId, {
        expand: "students,school"
    });

    const pointsPerKm = {
        "walking": 5,
        "running": 3,
        "hiking": 6,
        "cycling": 20,
        "skating": 7
    };



    for (const student of classroom!.expand!.students) {
        const activityPoints = {
            "total": 0,
            "walking": 0,
            "running": 0,
            "hiking": 0,
            "cycling": 0,
            "skating": 0
        };

        const studentActivities = await pb.collection("activities").getFullList({
            filter: `(user="${student.id}")`
        });

        for (const activity of studentActivities) {
            if (Math.round((activity?.distance / 1000)) >= pointsPerKm[activity?.type]) {
                activityPoints[activity?.type] += 1;
                activityPoints["total"] += 1;
            }
        }
/*

        for (let i = 0; i < studentActivities.length; i++) {
            const points = Math.floor((studentActivities[i].distance / 1000) / pointsPerKm[studentActivities[i].type]);
            activityPoints[studentActivities[i].type] += points;
            activityPoints["total"] += points;
        }
*/

        student.activityPoints = activityPoints;
    }

    return {
        classroom
    };
};
