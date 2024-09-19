<script lang="ts">
    import ElipsisIcon from "./icons/ElipsisIcon.svelte";

    export let grade: string;

    function onChooseGrade() {
        console.log("Grade chosen");
    }

    function onShowOptions(event: MouseEvent) {
        event.stopPropagation();
        console.log("Options shown");
    }
</script>

<div
    on:click={onChooseGrade}
    role="button"
    tabindex="0"
    on:keydown={(e) => {
        if (e.key === "Enter") onChooseGrade();
    }}
    class="size-64 bg-white drop-shadow-xl flex items-center justify-center rounded-3xl relative"
>
    <div
        class="size-20 rounded-2xl bg-light-gray-1 border-2 border-white drop-shadow flex items-center justify-center"
    >
        <span class="text-dark-blue font-bold text-4xl no-select">{grade}</span>
    </div>
    <button on:click={onShowOptions} class="absolute top-4 right-7">
        <ElipsisIcon />
    </button>
</div>
