<script lang="ts">
    import SeparatorLine from "./SeparatorLine.svelte";

    export let label: string;
    export let value = "";
    export let type: "text" | "password" = "text";

    let readonly = true;
</script>

<div class="flex flex-col items-start justify-center gap-4 w-64">
    <SeparatorLine />
    <label class="ml-1 text-dark-blue text-sm" for="">{label}</label>
    <div class="flex flex-row gap-4">
        {#if type === "password"}
            <input
                bind:value
                {readonly}
                class="text-lg font-semibold p-3 h-10 w-[inherit] bg-light-gray-1 drop-shadow-sm rounded-2xl border-2 border-white"
                type="text"
            />
        {:else if type === "text"}
            <input
                bind:value
                {readonly}
                class="text-lg font-semibold p-3 h-10 w-[inherit] bg-light-gray-1 drop-shadow-sm rounded-2xl border-2 border-white"
                type="password"
            />
        {/if}
        <button on:click={() => (readonly = !readonly)} class="border-none bg-none text-dark-blue">
            Edit
        </button>
    </div>
</div>
