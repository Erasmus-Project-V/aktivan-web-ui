<script lang="ts">
    import XIcon from "./icons/XIcon.svelte";
    import { createEventDispatcher } from "svelte";

    export let school: string;

    const dispatch = createEventDispatcher();

    function onRemove() {
        dispatch("remove", school);
    }
</script>

<div
    class="w-96 h-12 bg-[#F5F5F5] rounded-2xl border-2 border-dark-green flex flex-row justify-between items-center p-4 font-semibold"
>
    <span class="text-dark-blue">{school}</span>
    <button on:click={onRemove}>
        <XIcon />
    </button>
</div>
