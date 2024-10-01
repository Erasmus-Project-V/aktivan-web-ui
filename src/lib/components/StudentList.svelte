<script lang="ts">
    import TableColumnHeader from "./TableColumnHeader.svelte";
    import StudentListRow from "./StudentListRow.svelte";
</script>

<div class="bg-white border-collapse">
    <table class="text-center w-full">
        <thead>
            <tr>
                <TableColumnHeader class="text-left">Student</TableColumnHeader>
                <TableColumnHeader>Points</TableColumnHeader>
                <TableColumnHeader>Running</TableColumnHeader>
                <TableColumnHeader>Cycling</TableColumnHeader>
                <TableColumnHeader>Hiking</TableColumnHeader>
                <TableColumnHeader>Walking</TableColumnHeader>
                <TableColumnHeader>Skating</TableColumnHeader>
            </tr>
        </thead>
        <tbody>
            <slot />
        </tbody>
    </table>
</div>
