<script lang="ts">
    import BackButton from "$lib/components/BackButton.svelte";
    import ClassIndicator from "$lib/components/ClassIndicator.svelte";
    import SchoolIndicator from "$lib/components/SchoolIndicator.svelte";
    import StudentExerciseList from "$lib/components/StudentExerciseList.svelte";
    import StudentExerciseListRow from "$lib/components/StudentExerciseListRow.svelte";

    import runningBg from "$lib/assets/runningExerciseBgSquare.png";
    import StudentPointsCard from "$lib/components/StudentPointsCard.svelte";
    import PersonIconBlue from "$lib/components/icons/PersonIconBlue.svelte";
    import { type LayoutData } from "./$types";
    import { page } from "$app/stores";


    export let data: LayoutData;

    const student = data.classroom.expand.students.find(student => student.id === $page.params.studentId);
</script>

<div class="flex justify-center w-screen h-screen">
    <div
        class="flex flex-col items-start gap-8 rounded-3xl w-[97.5vw] h-[75vh] bg-white mt-8 px-16 pb-4 pt-10"
    >
        <div class="flex flex-row items-center px-3">
            <BackButton href=".." />
        </div>
        <div class="flex flex-row items-center gap-5">
            <div class="flex flex-row items-center justify-center gap-2">
                <PersonIconBlue width={32} height={32} />
                <span class="text-dark-blue opacity-80 text-2xl">{student.username}</span>
            </div>
            <StudentPointsCard points={19} />
        </div>
        <div class="self-stretch -mt-8">
            <StudentExerciseList>
                <StudentExerciseListRow exerciseName="Running" points={19} km={2.6} hours={0.4}>
                    <img src={runningBg} alt="A man running" />
                </StudentExerciseListRow>
            </StudentExerciseList>
        </div>
        <div class="mt-auto w-full flex flex-row justify-between">
            <SchoolIndicator school={data?.classroom?.expand?.school.name} />
            <ClassIndicator className={data?.classroom?.name} />
        </div>
    </div>
</div>
