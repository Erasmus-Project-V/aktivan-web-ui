<script lang="ts">
    export let href: string;
</script>

<a {href} class="flex flex-row gap-1">
    <span>
        <slot name="icon" />
    </span>
    <span class="text-dark-gray text-sm font-semibold uppercase">
        <slot name="label" />
    </span>
</a>
