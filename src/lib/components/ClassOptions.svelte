<script lang="ts">
    import GearIcon from "./icons/GearIcon.svelte";
    import ShareIcon from "./icons/ShareIcon.svelte";
</script>

<div
    class="w-32 h-24 bg-white drop-shadow-four rounded-3xl flex flex-col justify-between p-4 gap-2"
>
    <button class="flex flex-row gap-2 text-dark-blue font-semibold text-sm">
        <GearIcon />
        <span>Edit class</span>
    </button>
    <button class="flex flex-row gap-2 text-dark-blue font-semibold text-sm">
        <ShareIcon />
        <span>Copy link</span>
    </button>
</div>

<style>
    .drop-shadow-four {
        filter: drop-shadow(0 8px 6px rgb(0 0 0 / 0.03)) drop-shadow(0 3px 2px rgb(0 0 0 / 0.08))
            drop-shadow(0 -8px 6px rgb(0 0 0 / 0.03)) drop-shadow(0 -3px 2px rgb(0 0 0 / 0.08))
            drop-shadow(8px 0 6px rgb(0 0 0 / 0.03)) drop-shadow(3px 0 2px rgb(0 0 0 / 0.08))
            drop-shadow(-8px 0 6px rgb(0 0 0 / 0.03)) drop-shadow(-3px 0 2px rgb(0 0 0 / 0.08));
    }
</style>
