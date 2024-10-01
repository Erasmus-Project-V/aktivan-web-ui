<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let checked = false;
    export let disabled = false;

    const dispatch = createEventDispatcher();

    function handleChange() {
        checked = !checked;
        dispatch("change", { checked });
    }
</script>

<label class="inline-flex items-center cursor-pointer">
    <input type="checkbox" class="hidden" {checked} {disabled} on:change={handleChange} />
    <div
        class={`w-6 h-6 flex items-center justify-center border-2 rounded-sm transition-colors duration-200 ease-in-out
      ${checked ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"}
      ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-blue-500"}`}
    >
        {#if checked}
            <svg class="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
        {/if}
    </div>
</label>
