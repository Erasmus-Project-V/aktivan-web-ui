<script lang="ts">
    import PeopleIcon from "./icons/PeopleIcon.svelte";

    export let school: string;
</script>

<div class="inline-block">
    <div class="flex flex-row items-center justify-center gap-5">
        <div
            class="bg-light-gray-1 border-2 border-white size-14 rounded-2xl flex items-center justify-center drop-shadow-sm"
        >
            <PeopleIcon fill="#075985" />
        </div>
        <span class="text-dark-blue text-2xl font-bold">{school}</span>
    </div>
</div>
