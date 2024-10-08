import type { LayoutLoad } from "./$types";
import { pb } from "$lib/services/pb";

export const load: LayoutLoad = async ({ params }) => {
    const classroom = await pb.collection("classrooms").getOne(params.classId, {
        expand: "students,school"
    });

    return {
        classroom
    };
};
