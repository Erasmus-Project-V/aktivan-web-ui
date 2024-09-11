<script lang="ts">
    export let size: "md" | "lg" = "md";

    const sizes = {
        lg: "h-10 w-72 text-sm",
        md: "py-3 px-6 text-lg"
    };
</script>

<button
    on:click
    class="{$$props.class} uppercase {sizes[
        size
    ]} bg-dark-blue rounded-xl hover:bg-blue-600 transition-all text-xs text-white font-bold py-2 px-4"
>
    <slot />
</button>
