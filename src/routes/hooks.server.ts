import type { Handle } from "@sveltejs/kit";
import { isAuthenticated } from "$lib/services/users";

export const handleAuth: Handle = async ({ event, resolve }) => {
    const authToken = event.cookies.get("authToken");

    (event.locals as never)!.authStatus = null;

    if (!authToken) {
        return resolve(event);
    }

    const authStatus = await isAuthenticated(authToken);

    if (authStatus.isAuthenticated) {
        (event.locals as never)!.authStatus = authStatus;
    }

    return resolve(event);
};