<script>
    import ClassQrCode from "$lib/components/ClassQRCode.svelte";
    import SchoolIndicator from "$lib/components/SchoolIndicator.svelte";
    import Search from "$lib/components/Search.svelte";
    import ShareClassLink from "$lib/components/ShareClassLink.svelte";
</script>

<div class="w-screen h-screen flex justify-center">
    <div
        class="px-10 py-4 flex flex-col items-center justify-center bg-white w-4/12 h-4/6 mt-20 rounded-3xl gap-16"
    >
        <ClassQrCode
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXgnU7FduTcy0Z7GyoXnMnCqLBwMwAXdiFw&s"
        />
        <div class="flex flex-col gap-7 items-center">
            <h1 class="uppercase text-dark-blue text-2xl font-bold">Add Students</h1>
            <Search />
            <ShareClassLink link="" />
        </div>
        <div class="h-full self-start flex items-end">
            <SchoolIndicator school="V. gimnazija" />
        </div>
    </div>
</div>
