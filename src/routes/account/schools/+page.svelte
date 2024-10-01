<script lang="ts">
    import AddClassroomButton from "$lib/components/AddClassroomButton.svelte";
    import ClassCard from "$lib/components/ClassCard.svelte";
    import ClassroomButton from "$lib/components/ClassroomButton.svelte";
    import SchoolDropdown from "$lib/components/SchoolDropdown.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    // Function to group classrooms by school
    function groupClassroomsBySchool(classrooms: { school: string; name: string }[]) {
        const grouped = new Map<string, { school: string; classrooms: string[] }>();

        classrooms.forEach(classroom => {
            if (grouped.has(classroom.school)) {
                grouped.get(classroom.school)!.classrooms.push(classroom.name);
            } else {
                grouped.set(classroom.school, { school: classroom?.expand.school.name, classrooms: [classroom] });
            }
        });

        return Array.from(grouped.values());
    }

    // Group the classrooms by school
    const groupedSchools = groupClassroomsBySchool(data.classrooms);
</script>

<main class="py-16 px-24">
    {#each groupedSchools as school}
        <SchoolDropdown school={school.school} open={true}>
            {#each school.classrooms as classroom}
                <ClassroomButton classroomId={classroom.id} classroom={classroom.name} />
            {/each}
<!--            <AddClassroomButton />-->
        </SchoolDropdown>
    {/each}
</main>
