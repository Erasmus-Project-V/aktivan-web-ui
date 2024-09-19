<script lang="ts">
    export let label: string;
</script>

<div class="inline-block">
    <button
        on:click
        class="flex flex-grow flex-row items-center justify-center gap-3 text-dark-blue font-semibold"
    >
        <slot />
        <span class="whitespace-nowrap">
            {label}
        </span>
    </button>
</div>
