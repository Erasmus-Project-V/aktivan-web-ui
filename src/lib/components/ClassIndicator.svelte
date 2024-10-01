<script lang="ts">
    export let className: string;
</script>

<div class="inline-block">
    <div class="flex flex-row items-center justify-center gap-5">
        <div
            class="bg-light-gray-1 border-2 border-white size-14 rounded-2xl flex items-center justify-center drop-shadow-sm text-dark-blue text-xl font-bold"
        >
            {className}
        </div>
    </div>
</div>
