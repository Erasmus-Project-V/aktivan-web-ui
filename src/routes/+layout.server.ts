import type { LayoutServerLoad } from "./$types";
import { pb } from "$lib/services/pb";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ locals, url }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const authStatus = locals.authStatus;

    if (!authStatus) {
        return;
    }

    pb.authStore.save(authStatus.authResponse.token, authStatus.authResponse.record);

    if (authStatus?.isAuthenticated) {
        if (url.pathname.includes("/dashboard/")) {
            return;
        }

        throw redirect(307, "/dashboard/schools");
    }

    if (!url.pathname.includes("/auth")) {
        throw redirect(307, "/auth/login");
    }
};