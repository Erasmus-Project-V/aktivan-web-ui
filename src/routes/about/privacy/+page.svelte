<script lang="ts">
    import BackButton from "$lib/components/BackButton.svelte";

    interface Section {
        title: string;
        content: string | string[];
        isList?: boolean;
    }

    const sections: Section[] = [
        {
            title: "Quick Overview",
            content: [
                "What data do we collect? Personal data provided by you during your use of our services.",
                "What about sensitive data? In certain cases, with your permission, we may process sensitive data, such as location.",
                "Do we collect data from third parties? No, all data is collected directly from you.",
                "Are your data safe? We work to protect your data, but no technology is 100% secure.",
                "What are your rights? You can request access, corrections, or deletion of your data."
            ],
            isList: true
        },
        {
            title: "1. What Data Do We Collect?",
            content: [
                "We collect data that you share with us, such as:",
                "• Your name and surname",
                "• Email address",
                "• Username",
                "• Password",
                "If you use the aktiVan mobile application, we may also request:",
                "• Location data: With your permission, we may track your location while you use the app. This can be disabled in your device's settings.",
                "• Gender data – provided during registration",
                "• Height data",
                "• Weight data"
            ],
            isList: true
        },
        {
            title: "2. Why Do We Use Your Data?",
            content: [
                "We use your data to:",
                "• Enable account creation and login.",
                "• Provide requested services.",
                "• Respond to your inquiries and offer support."
            ],
            isList: true
        },
        {
            title: "3. In What Situations Do We Use Your Data?",
            content: [
                "We process your data when we have a valid reason, such as:",
                "• Your permission.",
                "• Contractual obligations (e.g., providing services).",
                "• Legal requirements.",
                "• Protecting vital interests (e.g., preventing harm)."
            ],
            isList: true
        },
        {
            title: "4. When and With Whom Do We Share Your Data?",
            content:
                "We share geolocation data with your teachers, who will reward your activities tracked through the mobile application."
        },
        {
            title: "5. How Long Do We Retain Your Data?",
            content:
                "We retain your data only as long as it is necessary for the purpose it was collected, or until you request its deletion."
        },
        {
            title: "6. How Do We Protect Your Data?",
            content:
                "We strive to protect your data using state-of-the-art technology. However, as data transmission over the internet is never completely secure, we cannot guarantee absolute protection."
        },
        {
            title: "7. What Are Your Rights?",
            content: [
                "Your rights include:",
                "• Accessing the data we have about you.",
                "• Requesting corrections or deletion of your data.",
                "To exercise your rights, contact us at admin@green-stem.eu."
            ],
            isList: true
        },
        {
            title: '8. What About the "Do-Not-Track" Option?',
            content:
                'Since the app is designed for tracking user activity by teachers, there is currently no "Do-Not-Track" option.'
        },
        {
            title: "9. Updates to This Policy",
            content:
                "We may update this Privacy Policy periodically. Any changes will be announced on our website or via email."
        },
        {
            title: "10. Contact Us",
            content: [
                "Have questions or need assistance? Contact us:",
                "• Email: admin@green-stem.eu",
                "• Address:",
                "V. gimnazija, Zagreb",
                "Klaićeva 1, 10000 Zagreb, Croatia"
            ],
            isList: true
        },
        {
            title: "11. How to Manage Your Data?",
            content:
                "Want to review, update, or delete your data? Send us a request via email, and we will assist you."
        }
    ];
</script>

<div class="w-screen h-screen flex justify-center overflow-y-scroll pb-8">
    <div
        class="flex flex-col items-start gap-6 rounded-3xl w-[97.5vw] overflow-y-scroll bg-white mt-8 px-16 pb-12 pt-10"
    >
        <div class="flex flex-row items-center px-3">
            <BackButton href="/account/schools" />
        </div>

        <div class="w-full flex flex-col items-center overflow-y-scroll">
            <div class="max-w-4xl w-full">
                <div class="mb-12 text-center">
                    <h1 class="text-dark-blue text-3xl font-bold uppercase mb-4">Privacy Policy</h1>
                    <p class="text-dark-gray">Last Updated: December 26, 2024</p>
                </div>

                <div class="text-dark-blue mb-8">
                    This Privacy Policy for V. gimnazija, Zagreb (hereinafter referred to as "we,"
                    "us," or "our") describes how and why we collect, use, and share your personal
                    data when you use our application. This includes:
                    <ul class="list-disc ml-6 mt-4 space-y-2">
                        <li>
                            Visiting our web application at https://aktivan.green-stem.eu or any
                            other pages linked to this Privacy Policy.
                        </li>
                        <li>
                            Downloading and using our mobile application aktiVan or any other
                            applications we provide.
                        </li>
                        <li>
                            Participating in our events, marketing activities, or other similar
                            situations.
                        </li>
                    </ul>
                </div>

                <div class="space-y-12">
                    {#each sections as section}
                        <section
                            class="scroll-mt-24"
                            id={section.title.toLowerCase().replace(/\s+/g, "-")}
                        >
                            <h2 class="text-dark-blue text-xl font-bold mb-4">{section.title}</h2>
                            {#if section.isList && Array.isArray(section.content)}
                                <ul class="space-y-2 text-dark-blue">
                                    {#each section.content as item}
                                        <li>{item}</li>
                                    {/each}
                                </ul>
                            {:else}
                                <p class="text-dark-blue">{section.content}</p>
                            {/if}
                        </section>
                    {/each}
                </div>

                <div class="mt-12 pt-8 border-t border-light-gray-1">
                    <p class="text-dark-gray text-sm text-center">
                        If you have any additional questions, feel free to contact us at
                        <a
                            href="mailto:admin@green-stem.eu"
                            class="text-dark-blue hover:text-dark-green transition-colors"
                        >
                            admin@green-stem.eu
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    /* Add smooth scrolling for anchor links */
    body {
        scroll-behavior: smooth;
    }

    /* Style for the container to enable scrolling */
    div.w-screen {
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>
