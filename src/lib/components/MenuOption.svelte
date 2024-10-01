<script lang="ts">
    import SeparatorLine from "./SeparatorLine.svelte";
    import RightArrowIcon from "$lib/components/icons/RightArrowIcon.svelte";

    export let href: string;
</script>

<div class="flex flex-col justify-center items-start w-80 gap-4">
    <SeparatorLine />
    <a {href} class="cursor-pointer w-[inherit]">
        <span
            class="flex flex-row justify-between w-[inherit] items-center text-dark-blue font-[500] text-lg"
        >
            <slot />
            <RightArrowIcon />
        </span>
    </a>
    <SeparatorLine />
</div>
