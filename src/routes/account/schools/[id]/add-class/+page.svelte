<script lang="ts">
    import AddStudentButton from "$lib/components/AddStudentButton.svelte";
    import BackButton from "$lib/components/BackButton.svelte";
    import BoxInput from "$lib/components/BoxInput.svelte";
    import OutlinedButton from "$lib/components/OutlinedButton.svelte";
    import SchoolIndicator from "$lib/components/SchoolIndicator.svelte";
    import StudentCard from "$lib/components/StudentCard.svelte";

    let className: string;
</script>

<div class="flex flex-col items-center w-screen h-screen">
    <main class="bg-white w-8/12 h-3/5 rounded-2xl mt-10 px-4 py-10 relative">
        <BackButton href=".." />
        <div class="flex flex-col items-center">
            <h1 class="uppercase text-dark-blue font-bold text-2xl">Add Your Class</h1>
        </div>
        <div class="px-32 mt-16 flex flex-col justify-center gap-8">
            <span class="flex flex-row items-center justify- gap-4">
                <span class="text-lg font-bold text-dark-blue uppercase">Name</span>
                <BoxInput bind:value={className} />
            </span>
            <span class="flex flex-col justify-center gap-4">
                <span class="text-lg font-bold text-dark-blue uppercase">Students</span>
                <div class="grid grid-cols-7">
                    <StudentCard studentName="Karlo Vizec" />
                    <AddStudentButton />
                </div>
            </span>
        </div>
        <div class="absolute bottom-4 left-1/2">
            <OutlinedButton>Create</OutlinedButton>
        </div>
        <div class="absolute bottom-4">
            <SchoolIndicator school="V. gimnazija" />
        </div>
    </main>
</div>
