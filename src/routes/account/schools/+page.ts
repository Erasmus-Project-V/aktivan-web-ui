import type { PageLoad } from "./$types";
import { pb } from "$lib/services/pb";

export const load: PageLoad = async () => {
    const classrooms = await pb.collection("classrooms").getFullList({
        filter: `(teachers~"${pb.authStore.model!.id}")`,
        expand: "teachers,students,school"
    });

    console.log(classrooms);

    return {
        classrooms
    };
};
