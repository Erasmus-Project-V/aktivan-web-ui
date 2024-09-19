<script lang="ts">
    export let imgSrc: string;
</script>

<div class="inline-block">
    <div class="flex flex-col items-center justify-center gap-2">
        <div class="size-36">
            <img src={imgSrc} alt="QR Code" />
        </div>
        <span class="text-dark-blue text-sm font-semibold">Have students scan the QR code</span>
    </div>
</div>
