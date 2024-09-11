<script>
    import { createEventDispatcher } from "svelte";

    export let checked = false;
    const dispatch = createEventDispatcher();

    function toggle() {
        checked = !checked;
        dispatch("change", checked);
    }
</script>

<button
    class="{$$props.class} inline-flex items-center cursor-pointer focus:outline-none"
    on:click={toggle}
    aria-checked={checked}
    role="switch"
>
    <div
        class={`relative w-10 h-6 ${checked ? "bg-dark-blue" : "bg-gray-200"} rounded-full transition-colors duration-200 ease-in-out ${checked ? "bg-blue-600" : ""}`}
    >
        <div
            class={`absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-200 ease-in-out ${checked ? "transform translate-x-4" : ""}`}
        ></div>
    </div>
</button>
