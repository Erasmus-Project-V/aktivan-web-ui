<script lang="ts">
    import { goto } from "$app/navigation";
    import LeftArrowIcon from "./icons/LeftArrowIcon.svelte";

    export let href: string;

    function handleClick() {
        goto(href);
    }
</script>

<button on:click={handleClick} class="flex flex-row items-center justify-center gap-4">
    <LeftArrowIcon />
    <span class="uppercase text-dark-blue text-md font-bold">Back</span>
</button>
