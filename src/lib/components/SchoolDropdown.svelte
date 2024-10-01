<script lang="ts">
    import DownArrowIcon from "./icons/DownArrowIcon.svelte";
    import UpArrowIcon from "./icons/UpArrowIcon.svelte";
    import SchoolIndicator from "./SchoolIndicator.svelte";

    export let school: string;

    export let open = false;
</script>

<div class="flex flex-col gap-4">
    <div class="flex flex-row justify-start items-center gap-4">
        <div class="justify-self-start">
            <SchoolIndicator {school} />
        </div>
        <button on:click={() => (open = !open)}>
            {#if !open}
                <DownArrowIcon />
            {:else}
                <UpArrowIcon />
            {/if}
        </button>
    </div>
    <div class="w-full">
        <div class="grid grid-cols-6">
            {#if open}
                <slot />
            {/if}
        </div>
    </div>
</div>
