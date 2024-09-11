<script lang="ts">
    export let size: "md" | "lg" = "md";

    const sizes = {
        lg: "h-10 w-72 text-sm",
        md: "h-10 w-28 text-lg"
    };
</script>

<button
    on:click
    class="{$$props.class} uppercase {sizes[
        size
    ]} text-stroke text-center bg-light-gray-1 rounded-xl hover:opacity-80 transition-all text-sm text-dark-blue border-dark-green border-2 text-str font-bold py-2 px-4"
>
    <slot />
</button>

<style lang="postcss">
    .text-stroke {
        text-stroke: 0.3px #4c7800;
        -webkit-text-stroke: 0.3px #4c7800;
    }
</style>
