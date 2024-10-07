<script lang="ts">
    export let value: string;
    export let placeholder: string;
</script>

<input
    type="text"
    bind:value
    {placeholder}
    class="placeholder-opacity-75 w-20 h-12 text-dark-blue text-center font-bold text-lg rounded-xl border-white border-2 bg-light-gray-3 drop-shadow-md"
/>
