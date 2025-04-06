import { redirect } from "@sveltejs/kit";

export const ssr = true;

import type { LayoutLoad } from "./$types";
import { pb } from "$lib/services/pb";

//
// export const load: LayoutLoad = async ({ route }) => {
//     const user = await pb
//         .collection("teachers")
//         .getOne(localStorage.getItem("userId")!)
//         .catch((err) => {
//             if (err) {
//                 localStorage.clear();
//             }
//         });
//
//     pb.authStore.save(localStorage.getItem("authToken")!, user!);
//
//     if (pb.authStore.isValid) {
//         if (!route.id?.includes("/account") && !route.id?.includes("/about")) {
//             redirect(307, "/account/schools");
//         }
//     } else {
//         if (!route.id?.includes("/auth") && !route.id?.includes("/about")) {
//             redirect(307, "/auth/login");
//         }
//     }
// };

// export const load: LayoutLoad = async () => {
//     const authToken = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("authToken="))
//         ?.split("=")[1];
//
//     if (!authToken) {
//         return;
//     }
//
//
// };