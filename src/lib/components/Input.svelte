<script lang="ts">
    import DashedEyeIcon from "./icons/DashedEyeIcon.svelte";
    import EyeIcon from "./icons/EyeIcon.svelte";

    export let type: "text" | "password" = "text";
    export let label: string;
    export let placeholder: string;

    let showPassword = false;
</script>

<div class="flex flex-col {$$props.class}">
    <span class="text-black pl-2">{label}</span>
    <div class="{$$props.class} relative">
        <input
            class="placeholder:text-sm text-light-gray-2 border-solid rounded-2xl h-12 w-72 p-4 bg-transparent border-[#E2E8F0] border-[1.5px]"
            type={showPassword ? "text" : type}
            {placeholder}
        />
        {#if type === "password"}
            <button
                on:click={() => (showPassword = !showPassword)}
                class="absolute right-3 flex items-center justify-center top-3.5"
            >
                {#if !showPassword}
                    <EyeIcon />
                {:else}
                    <DashedEyeIcon />
                {/if}
            </button>
        {/if}
    </div>
</div>
