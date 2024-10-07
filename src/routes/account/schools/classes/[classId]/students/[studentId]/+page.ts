import type { PageLoad } from "./$types";
import { pb } from "$lib/services/pb";

export const load: PageLoad = async ({ params }) => {
    const studentActivities = await pb.collection("activities").getFullList({
        filter: `(user="${params?.studentId}")`
    });

    return {
        studentActivities
    };
};
