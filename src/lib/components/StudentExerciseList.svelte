<script lang="ts">
    import TableColumnHeader from "./TableColumnHeader.svelte";
</script>

<div class="bg-white border-collapse">
    <table class="text-center w-full">
        <thead>
            <tr>
                <TableColumnHeader class="text-left" />
                <TableColumnHeader class="text-lg">Points</TableColumnHeader>
                <TableColumnHeader class="text-lg">Km</TableColumnHeader>
                <TableColumnHeader class="text-lg">Hours</TableColumnHeader>
            </tr>
        </thead>
        <tbody>
            <slot />
        </tbody>
    </table>
</div>
