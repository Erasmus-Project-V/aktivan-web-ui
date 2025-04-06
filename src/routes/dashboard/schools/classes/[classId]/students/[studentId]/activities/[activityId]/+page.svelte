<script lang="ts">
    import { page } from "$app/stores";
    import BackButton from "$lib/components/BackButton.svelte";
    import ClassIndicator from "$lib/components/ClassIndicator.svelte";
    import SchoolIndicator from "$lib/components/SchoolIndicator.svelte";
    import { pb } from "$lib/services/pb";
    import { onMount } from "svelte";
    import { DateTime } from "luxon";

    // Activity type from URL parameter
    const activityType = $page.params.activityId;

    // State variables
    let activities: any[] = [];
    let shownActivites: any[] = [];
    let selectedMonth = DateTime.now().get("month");
    let selectedYear = DateTime.now().get("year");
    let classroom: any;
    let student: any;

    console.log(selectedYear);
    console.log(selectedMonth);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const activityTypeLabels: { [key: string]: string } = {
        walking: "Walking",
        running: "Running",
        hiking: "Hiking",
        cycling: "Cycling",
        skating: "Skating"
    };

    onMount(async () => {
        // Fetch classroom data
        classroom = await pb.collection("classrooms").getOne($page.params.classId, {
            expand: "school,students"
        });

        // Find student
        student = classroom.expand.students.find((s: any) => s.id === $page.params.studentId);

        await loadActivities();
    });

    async function loadActivities() {
        // Fetch activities for the selected month and type
        activities = await pb.collection("activities").getFullList({
            filter: `(user="${$page.params.studentId}" && type="${activityType}")`,
            sort: "start"
        });
    }

    function isShowActivity(activity: any): boolean {
        const activityDate = DateTime.fromSQL(activity.start).toLocal();
        console.log(activityDate);
        console.log(selectedMonth);
        console.log(selectedYear);
        return activityDate.month === selectedMonth + 1 && activityDate.year === selectedYear;
    }

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    }

    function formatDuration(seconds: number) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    }

    async function changeMonth(increment: number) {
        selectedMonth += increment;
        if (selectedMonth > 11) {
            selectedMonth = 0;
            selectedYear++;
        } else if (selectedMonth < 0) {
            selectedMonth = 11;
            selectedYear--;
        }

        shownActivites = [];
        for (const activity of activities) {
            if (isShowActivity(activity)) {
                shownActivites.push(activity);
            }
        }
        shownActivites = shownActivites;
    }
</script>

<div class="flex justify-center">
    <div
        class="flex flex-col items-start gap-10 rounded-3xl w-[97.5vw] h-[75vh] bg-white mt-8 px-16 pb-4 pt-10"
    >
        <div class="flex flex-row items-center px-3">
            <BackButton href=".." />
        </div>

        <div class="w-full flex flex-col gap-6">
            <!-- Header -->
            <div class="flex justify-between items-center">
                <h1 class="text-2xl font-bold text-dark-blue">
                    {activityTypeLabels[activityType]} Activities
                </h1>
                {#if student}
                    <span class="text-dark-gray">
                        {student.firstName}
                        {student.lastName}
                    </span>
                {/if}
                <div class="flex items-center gap-4">
                    <button
                        class="text-dark-blue hover:text-dark-green transition-colors"
                        on:click={() => changeMonth(-1)}
                    >
                        ←
                    </button>
                    <span class="text-dark-blue font-semibold">
                        {months[selectedMonth]}
                        {selectedYear}
                    </span>
                    <button
                        class="text-dark-blue hover:text-dark-green transition-colors"
                        on:click={() => changeMonth(1)}
                    >
                        →
                    </button>
                </div>
            </div>

            <!-- Activities List -->
            <div class="gap-4 overflow-y-scroll h-[40vh]">
                {#if shownActivites.length > 0}
                    <div class="grid gap-4">
                        {#each shownActivites as activity}
                            <div class="bg-light-gray-1 p-4 rounded-xl">
                                <div class="flex justify-between items-center">
                                    <div class="flex flex-col">
                                        <span class="text-dark-blue font-semibold">
                                            {formatDate(activity.created)}
                                        </span>
                                        <span class="text-dark-gray text-sm">
                                            Duration: {formatDuration(activity.duration)}
                                        </span>
                                    </div>
                                    <div class="text-right">
                                        <span class="text-dark-blue font-bold">
                                            {(activity.distance / 1000).toFixed(2)} km
                                        </span>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                {:else}
                    <div class="flex items-center justify-center h-40">
                        <span class="text-dark-gray"> No activities found for this month </span>
                    </div>
                {/if}
            </div>
        </div>

        <!-- Footer -->
        <div class="mt-auto w-full flex flex-row justify-between">
            {#if classroom?.expand?.school}
                <SchoolIndicator school={classroom.expand.school.name} />
            {/if}
            {#if classroom}
                <ClassIndicator className={classroom.name} />
            {/if}
        </div>
    </div>
</div>

<style>
    /* Add smooth scrolling for the activities list */
    .overflow-y-auto {
        scroll-behavior: smooth;
    }
</style>
