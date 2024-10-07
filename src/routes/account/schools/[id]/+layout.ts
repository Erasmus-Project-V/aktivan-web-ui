import type { LayoutLoad } from "./$types";
import { pb } from "$lib/services/pb";

export const load: LayoutLoad = async ({ params }) => {
    const school = await pb.collection("schools").getOne(params.id);

    return {
        school
    };
};
