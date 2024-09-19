<script lang="ts">
    import DownArrowIcon from "./icons/DownArrowIcon.svelte";
    import UpArrowIcon from "./icons/UpArrowIcon.svelte";
    import SchoolIndicator from "./SchoolIndicator.svelte";

    let isOpen = false;
</script>

<div class="flex flex-col gap-4 items-center justify-center">
    <div class="flex flex-row justify-center items-center gap-4">
        <SchoolIndicator school="V. gimnazija" />
        <button on:click={() => (isOpen = !isOpen)}>
            {#if !isOpen}
                <DownArrowIcon />
            {:else}
                <UpArrowIcon />
            {/if}
        </button>
    </div>
    {#if isOpen}
        <slot />
    {/if}
</div>
