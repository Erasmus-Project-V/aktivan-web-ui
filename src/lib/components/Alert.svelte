<script lang="ts">
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import ErrorIcon from "./icons/ErrorIcon.svelte";

    type AlertType = "error" | "info" | "success";

    let alertMessage: string = "";
    let alertType: AlertType | "" = "";
    let showAlert: boolean = false;

    function displayAlert(message: string, type: AlertType): void {
        alertMessage = message;
        alertType = type;
        showAlert = true;

        setTimeout(() => {
            showAlert = false;
        }, 3500);
    }

    // Make the displayAlert function available globally
    onMount(() => {
        (window as any).displayAlert = displayAlert;
    });

    function getAlertColor(type: AlertType | ""): string {
        switch (type) {
            case "error":
                return "bg-red text-white font-bold";
            case "info":
                return "bg-blue-500 text-white";
            case "success":
                return "bg-green-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    }
</script>

{#if showAlert}
    <div
        transition:fade
        class="z-[9999] text-left flex flex-row items-center justify-start gap-2 fixed bottom-4 left-4 w-72 py-3 px-4 rounded-lg shadow-md {getAlertColor(
            alertType
        )}"
    >
        <ErrorIcon />
        {alertMessage}
    </div>
{/if}

<style global>
    /* You can add any additional global styles here if needed */
</style>
