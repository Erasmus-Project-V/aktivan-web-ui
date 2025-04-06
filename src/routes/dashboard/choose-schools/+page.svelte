<script>
    import Search from "$lib/components/Search.svelte";
    import OutlinedButton from "$lib/components/OutlinedButton.svelte";
    import ChosenSchool from "$lib/components/ChosenSchool.svelte";
</script>

<div class="flex justify-center mt-10 h-screen w-screen">
    <main
        class="flex flex-col p-4 items-center pt-16 rounded-3xl w-3/12 h-[40rem] bg-white drop-shadow-md"
    >
        <h1 class="text-dark-blue text-2xl font-bold uppercase">Choose Schools</h1>
        <span class="text-dark-blue mt-2 font-semibold">
            Please choose all schools you teach in
        </span>
        <div class="mt-8">
            <Search />
        </div>
        <div class="mt-8 flex flex-col gap-2 overflow-y-auto h-72">
            <ChosenSchool />
        </div>
        <span class="absolute bottom-8">
            <OutlinedButton>Confirm</OutlinedButton>
        </span>
    </main>
</div>
