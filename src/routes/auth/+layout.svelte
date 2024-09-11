<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import erasmusLogo from "$lib/assets/eu-erasmus-logo.png";
    import bg from "$lib/assets/aktivan-auth-bg.webp";
    import aktivanLogo from "$lib/assets/aktivan-web-logo.png";
</script>

<main class="flex flex-col gap-5 items-center justify-end w-screen h-screen overflow-clip">
    <div class="mb-5 relative flex flex-grow flex-col gap-5 items-center w-screen justify-end">
        <div class="w-11/12 rounded-3xl relative" style="height: 75vh;">
            <span class="absolute top-6 left-16 flex flex-row items-center gap-4 text-sm">
                <img src={aktivanLogo} alt="aktiVan logo" />
                <span class="text-white font-semibold uppercase"> aktiVan For Teachers </span>
            </span>
            <div class="absolute w-full h-full">
                <slot />
            </div>
            <img
                src={bg}
                class="w-full h-full object-bottom"
                alt="Colourful mountain vector background"
            />
        </div>
        <!-- <img src={bg} class="w-11/12 rounded-xl" alt="Colourful mountain vector background" /> -->
        <img src={erasmusLogo} alt="EU Erasmus logo" />
        <Footer class="z-10" />
    </div>
</main>
