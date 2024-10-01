<script lang="ts">
    import SearchIcon from "./icons/SearchIcon.svelte";
    import { createEventDispatcher } from "svelte";

    export let results: string[] = [];

    const dispatch = createEventDispatcher();

    function selectResult(result: string) {
        dispatch("select", result);
    }
</script>

<div class="drop-shadow-sm">
    <div class="flex items-center text-black relative m-0 p-0">
        <input
            placeholder="Search"
            type="text"
            class="text-black text-opacity-60 placeholder-black placeholder-opacity-60 py-4 px-14 bg-white rounded-lg w-96 drop-shadow-sm h-11 border-light-gray-1 border-[0.1rem]"
        />
        <SearchIcon class="absolute left-4" />
    </div>
    {#if results.length > 0}
        <div
            class="bg-white w-96 min-h-32 rounded-lg border-[0.1rem] border-light-gray-1 -mt-3 flex flex-col justify-center gap-4"
        >
            {#each results as result}
                <span
                    on:click={() => selectResult(result)}
                    on:keydown={() => selectResult(result)}
                    role="button"
                    tabindex="0"
                    class="ml-5">{result}</span
                >
            {/each}
        </div>
    {/if}
</div>
