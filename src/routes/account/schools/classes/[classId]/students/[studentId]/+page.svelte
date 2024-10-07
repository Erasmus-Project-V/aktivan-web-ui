<script lang="ts">
    import BackButton from "$lib/components/BackButton.svelte";
    import ClassIndicator from "$lib/components/ClassIndicator.svelte";
    import SchoolIndicator from "$lib/components/SchoolIndicator.svelte";
    import StudentExerciseList from "$lib/components/StudentExerciseList.svelte";
    import StudentExerciseListRow from "$lib/components/StudentExerciseListRow.svelte";

    import runningBg from "$lib/assets/runningExerciseBgSquare.png";
    import walkingBg from "$lib/assets/walking-square.png";
    import cyclingBg from "$lib/assets/cycling-square.png";
    import skatingBg from "$lib/assets/skating-square.png";
    import hikingBg from "$lib/assets/hiking-square.png";

    import StudentPointsCard from "$lib/components/StudentPointsCard.svelte";
    import PersonIconBlue from "$lib/components/icons/PersonIconBlue.svelte";
    import { type LayoutData } from "./$types";
    import { page } from "$app/stores";

    export let data: LayoutData;

    const student = data.classroom.expand.students.find(
        (student) => student.id === $page.params.studentId
    );

    const studentActivities = data.studentActivities;

    console.log(studentActivities);

    const activities: Map<string, { points: number; km: number; hours: number }> = new Map([]);

    studentActivities.forEach((activity: any) => {
        if (activities.has(activity.type)) {
            const existingActivity = activities.get(activity.type);
            if (existingActivity) {
                // existingActivity.points += activity.points;
                existingActivity.km += activity.distance / 1000;
                existingActivity.hours += activity.duration / 3600;
            }
            return;
        }

        activities.set(activity.type, {
            points: activity.points,
            km: activity.distance / 1000,
            hours: activity.duration / 3600
        });
    });
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
                <span class="text-dark-blue opacity-80 text-2xl"
                    >{student.firstName} {student.lastName}</span
                >
            </div>
            <StudentPointsCard points={0} />
        </div>
        <div class="self-stretch -mt-8">
            <StudentExerciseList>
                <StudentExerciseListRow
                    exerciseName="Running"
                    points={0}
                    km={activities?.get("running")?.km?.toFixed(2) ?? "0.00"}
                    hours={activities?.get("running")?.hours?.toFixed(2) ?? "0.00"}
                >
                    <img src={runningBg} alt="A man running" />
                </StudentExerciseListRow>
                <StudentExerciseListRow
                    exerciseName="Walking"
                    points={0}
                    km={activities?.get("walking")?.km?.toFixed(2) ?? "0.00"}
                    hours={activities?.get("walking")?.hours?.toFixed(2) ?? "0.00"}
                >
                    <img src={walkingBg} alt="A man running" />
                </StudentExerciseListRow>
                <StudentExerciseListRow
                    exerciseName="Hiking"
                    points={0}
                    km={activities?.get("hiking")?.km?.toFixed(2) ?? "0.00"}
                    hours={activities?.get("hiking")?.hours?.toFixed(2) ?? "0.00"}
                >
                    <img src={hikingBg} alt="A man running" />
                </StudentExerciseListRow>
                <StudentExerciseListRow
                    exerciseName="Cycling"
                    points={0}
                    km={activities?.get("cycling")?.km?.toFixed(2) ?? "0.00"}
                    hours={activities?.get("cycling")?.hours?.toFixed(2) ?? "0.00"}
                >
                    <img src={cyclingBg} alt="A man running" />
                </StudentExerciseListRow>
                <StudentExerciseListRow
                    exerciseName="Skating"
                    points={0}
                    km={activities?.get("skating")?.km?.toFixed(2) ?? "0.00"}
                    hours={activities?.get("skating")?.hours?.toFixed(2) ?? "0.00"}
                >
                    <img src={skatingBg} alt="A man skating" />
                </StudentExerciseListRow>
            </StudentExerciseList>
        </div>
        <div class="mt-auto w-full flex flex-row justify-between">
            <SchoolIndicator school={data?.classroom?.expand?.school.name} />
            <ClassIndicator className={data?.classroom?.name} />
        </div>
    </div>
</div>
