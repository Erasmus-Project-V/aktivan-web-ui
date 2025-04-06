<script lang="ts">
    import BackButton from "$lib/components/BackButton.svelte";
</script>

<div class="w-screen h-screen flex justify-center">
    <div
        class="flex flex-col items-start gap-10 rounded-3xl w-[97.5vw] h-[75vh] bg-white mt-8 px-16 pb-4 pt-10 overflow-y-auto"
    >
        <div class="flex flex-row items-center px-3">
            <BackButton href="/account/schools" />
        </div>

        <div class="w-full flex flex-col items-center gap-8">
            <h1 class="text-dark-blue text-3xl font-bold uppercase">Account Deletion</h1>

            <div class="max-w-2xl text-center flex flex-col gap-6 overflow-y-auto">
                <p class="text-lg text-dark-blue">
                    To delete your account and all associated data from aktiVan, please send an
                    email to:
                </p>

                <a
                    href="mailto:privacy@green-stem.eu"
                    class="text-xl text-dark-blue font-semibold hover:text-dark-green transition-colors"
                >
                    privacy@green-stem.eu
                </a>

                <div class="flex flex-col gap-4 text-left mt-4">
                    <p class="text-dark-blue">
                        Please include the following information in your email:
                    </p>
                    <ul class="list-disc list-inside text-dark-blue ml-4 space-y-2">
                        <li>Your full name</li>
                        <li>Email address associated with your account</li>
                        <li>Request for account deletion</li>
                    </ul>
                </div>

                <div class="bg-light-gray-1 p-6 rounded-xl mt-4">
                    <p class="text-dark-blue">
                        Your request will be processed within 7 business days. Once deleted, all
                        your personal data and associated information will be permanently removed
                        from our systems and cannot be recovered.
                    </p>
                </div>

                <p class="text-sm text-dark-gray mt-4">
                    This process complies with GDPR and data protection regulations. For more
                    information about how we handle your data, please refer to our Privacy Policy.
                </p>
            </div>
        </div>
    </div>
</div>
