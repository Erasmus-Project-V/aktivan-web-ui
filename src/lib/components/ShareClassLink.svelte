<script lang="ts">
    import ShareIcon from "./icons/ShareIcon.svelte";

    export let link: string;

    function copyLink() {
        navigator.clipboard.writeText(link);
    }
</script>

<button
    on:click={copyLink}
    class="bg-none border-none flex flex-row gap-2 text-dark-blue font-bold items-center justify-center"
>
    <ShareIcon />
    <span> Get link to this class </span>
</button>
