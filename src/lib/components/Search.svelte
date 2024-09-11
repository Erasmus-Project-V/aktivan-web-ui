<script lang="ts">
    import SearchIcon from "./icons/SearchIcon.svelte";
</script>

<div class="flex items-center text-black relative">
    <input
        placeholder="Search"
        type="text"
        class="text-black text-opacity-60 placeholder-black placeholder-opacity-60 py-4 px-14 bg-white rounded-lg shadow-lg w-96 h-11"
    />
    <SearchIcon class="absolute left-4" />
</div>
