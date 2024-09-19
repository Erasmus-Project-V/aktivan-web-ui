<script lang="ts">
    import PersonIconBlue from "./icons/PersonIconBlue.svelte";

    export let studentName: string;
</script>

<div
    class="w-36 h-20 rounded-3xl border-2 border-white bg-[#F5F5F5] flex flex-col items-center justify-center gap-1"
>
    <PersonIconBlue width={28} height={28} />
    <span class="opacity-60 text-black text-sm">{studentName}</span>
</div>
