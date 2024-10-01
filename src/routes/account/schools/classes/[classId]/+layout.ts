import type { PageLoad } from "./$types";
import { pb } from "$lib/services/pb";

export const load: PageLoad = async ({ params }) => {
    const classroom = await pb.collection("classrooms").getOne(params.classId, {
        expand: "students,school"
    });

    return {
        classroom
    };
};