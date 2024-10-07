<script lang="ts">
    export let label: string;
    export let labelClass = "";
</script>

<div class="inline-block">
    <button
        on:click
        class="flex flex-grow flex-row items-center justify-center gap-3 text-dark-blue {labelClass} font-semibold"
    >
        <slot />
        <span class="whitespace-nowrap">
            {label}
        </span>
    </button>
</div>
