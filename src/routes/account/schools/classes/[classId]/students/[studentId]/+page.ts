import type { PageLoad } from "./$types";
import { pb } from "$lib/services/pb";

export const load: PageLoad = async ({ params }) => {
    const pointsPerKm = {
        "walking": 5,
        "running": 3,
        "hiking": 6,
        "cycling": 20,
        "skating": 7
    };

    const studentActivities = await pb.collection("activities").getFullList({
        filter: `(user="${params?.studentId}")`
    });

    const activityPoints = {
        "total": 0,
        "walking": 0,
        "running": 0,
        "hiking": 0,
        "cycling": 0,
        "skating": 0
    };

    for (const activity of studentActivities) {
        if (Math.round((activity?.distance / 1000)) >= pointsPerKm[activity?.type as string]) {
            activityPoints[activity?.type as string] += 1;
            activityPoints["total"] += 1;
        }
    }

    return {
        studentActivities,
        activityPoints
    };
};
