import { redirect } from "@sveltejs/kit";

export const ssr = false;

import type { LayoutLoad } from "./$types";
import { pb } from "$lib/services/pb";

export const load: LayoutLoad = async ({ route }) => {
    const user = await pb
        .collection("teachers")
        .getOne(localStorage.getItem("userId")!)
        .catch((err) => {
            if (err) {
                localStorage.clear();
            }
        });

    pb.authStore.save(localStorage.getItem("authToken")!, user!);

    if (pb.authStore.isValid) {
        if (!route.id?.includes("/account")) {
            redirect(307, "/account/schools");
        }
    } else {
        if (!route.id?.includes("/auth")) {
            redirect(307, "/auth/login");
        }
    }
};
