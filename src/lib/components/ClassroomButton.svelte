<script lang="ts">
    import ElipsisIcon from "./icons/ElipsisIcon.svelte";

    export let classroom: string;

    function handleMainClick() {
        // Your custom logic for main click
        console.log("Main area clicked");
    }

    function handleEllipsisClick(event: MouseEvent) {
        event.stopPropagation();
        // Your custom logic for ellipsis click
        console.log("Ellipsis clicked");
    }
</script>

<button
    on:click={handleMainClick}
    class="relative size-64 bg-white drop-shadow-xl flex items-center justify-center rounded-xl"
>
    <div
        class="bg-light-gray-1 border-2 border-white size-24 flex items-center justify-center rounded-2xl drop-shadow-sm"
    >
        <span class="text-dark-blue font-bold text-4xl">{classroom}</span>
    </div>
    <div
        on:click={handleEllipsisClick}
        class="absolute right-3 top-2 p-1 cursor-pointer"
        role="button"
        tabindex="0"
        on:keydown={(e) => e.key === "Enter" && handleEllipsisClick(e)}
    >
        <ElipsisIcon />
    </div>
</button>
