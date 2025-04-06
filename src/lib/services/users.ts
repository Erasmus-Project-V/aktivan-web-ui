import { pb } from "./pb";
import { goto } from "$app/navigation";
import type { RecordAuthResponse, RecordModel } from "pocketbase";

export async function signIn(identity: string, password: string) {
    try {
        const authData = await pb.collection("teachers").authWithPassword(identity, password);

        document.cookie = `authToken=${authData.token}; path=/; SameSite=Lax; Secure`;
    } catch (err: any) {
        if (err.status === 400) {
            (window as unknown as any).displayAlert("Invalid credentials", "error");
        }
    }

    await goto("/dashboard/schools");
}

export async function isAuthenticated(authToken: string): Promise<{ isAuthenticated: boolean; authResponse: RecordAuthResponse<RecordModel> | null; }> {
    pb.authStore.save(authToken);

    let authResponse: RecordAuthResponse<RecordModel>;

    try {
        authResponse = await pb.collection("teachers").authRefresh();

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
        return { isAuthenticated: false, authResponse: null };
    }

    return { isAuthenticated: true, authResponse: authResponse };
}