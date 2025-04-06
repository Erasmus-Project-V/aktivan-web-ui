<script>
    import EnvelopeIcon from "$lib/components/icons/EnvelopeIcon.svelte";
</script>

<div class="w-screen h-screen flex justify-center mt-20">
    <main
        class="flex flex-col items-center pt-16 rounded-3xl w-3/12 h-[40rem] bg-white drop-shadow-md"
    >
        <h1 class="text-dark-blue text-2xl font-bold uppercase">Support</h1>
        <hr class="bg-dark-blue h-[0.125rem] w-80 mt-10" />

        <div class="flex flex-col items-center gap-8 mt-12">
            <div class="text-center w-80">
                <span class="text-dark-blue text-lg">
                    Need assistance with aktiVan? We're here to help!
                </span>
            </div>

            <div class="flex flex-col items-center gap-4 mt-4">
                <EnvelopeIcon width={48} height={48} />
                <span class="text-dark-gray text-lg font-semibold">Contact us at</span>
                <a
                    href="mailto:admin@green-stem.eu"
                    class="text-dark-blue text-xl font-bold hover:opacity-80 transition-all"
                >
                    admin@green-stem.eu
                </a>
            </div>

            <div class="text-center w-80 mt-8">
                <p class="text-dark-gray">
                    Our support team will respond to your inquiry as soon as possible. Please
                    include relevant details about your issue to help us assist you better.
                </p>
            </div>
        </div>
    </main>
</div>
