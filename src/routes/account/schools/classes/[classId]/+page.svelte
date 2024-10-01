<script lang="ts">
    import BackButton from "$lib/components/BackButton.svelte";
    import ClassCard from "$lib/components/ClassCard.svelte";
    import ClassIndicator from "$lib/components/ClassIndicator.svelte";
    import SchoolIndicator from "$lib/components/SchoolIndicator.svelte";
    import StudentList from "$lib/components/StudentList.svelte";
    import { type LayoutData } from "./$types";
    import StudentListRow from "$lib/components/StudentListRow.svelte";

    export let data: LayoutData;
</script>

<div class="flex justify-center">
    <div
        class="flex flex-col items-start gap-10 rounded-3xl w-[97.5vw] h-[75vh] bg-white mt-8 px-16 pb-4 pt-10"
    >
        <div class="flex flex-row items-center px-3">
            <BackButton href=".." />
        </div>
        <div class="self-stretch">
            <StudentList>
                {#each data?.classroom?.expand?.students as student}
                    <StudentListRow
                        classId={data?.classroom?.id}
                        studentId={student?.id}
                        studentName={student?.username}
                        totalPoints={19}
                        runningPoints={11}
                        skatingPoints={2}
                        cyclingPoints={4}
                        walkingPoints={0}
                        hikingPoints={1}
                    />
                {/each}
            </StudentList>
        </div>
        <div class="mt-auto w-full flex flex-row justify-between">
            <SchoolIndicator school={data?.classroom?.expand?.school.name} />
            <ClassIndicator className={data.classroom.name} />
        </div>
    </div>
</div>
