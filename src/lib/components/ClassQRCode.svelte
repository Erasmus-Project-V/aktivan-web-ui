<script lang="ts">
    export let imgSrc: string;
</script>

<div class="flex flex-grow flex-col items-center justify-center gap-0">
    <img class="size-64" src={imgSrc} alt="QR Code" />
    <span class="text-dark-blue text-sm font-semibold">Have students scan the QR code</span>
</div>
