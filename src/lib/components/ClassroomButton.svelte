<script lang="ts">
    import ClassOptions from "./ClassOptions.svelte";
    import ElipsisIcon from "./icons/ElipsisIcon.svelte";
    import { goto } from "$app/navigation";

    export let classroom: string;
    export let classroomId: string;

    let showOptions = false;

    function handleMainClick() {
        goto(`/account/schools/classes/${classroomId}`);
        console.log("Main area clicked");
    }

    function handleEllipsisClick(event: KeyboardEvent | MouseEvent) {
        event.stopPropagation();
        // showOptions = !showOptions;
    }
</script>

<button
    on:click={handleMainClick}
    class="relative size-64 bg-white drop-shadow-xl flex items-center justify-center rounded-3xl"
>
    <div
        class="bg-light-gray-1 border-2 border-white size-24 flex items-center justify-center rounded-2xl drop-shadow-sm"
    >
        <span class="text-dark-blue font-bold text-4xl">{classroom}</span>
    </div>
    {#if showOptions}
        <div class="absolute z-20 -right-16 top-10">
            <ClassOptions />
        </div>
    {/if}
    <!-- <div
        on:click={handleEllipsisClick}
        class="absolute right-3 top-2 p-1 cursor-pointer"
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === "Enter" && handleEllipsisClick(e)}
    >
        <ElipsisIcon />
    </div> -->
</button>
