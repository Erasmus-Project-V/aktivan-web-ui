<script lang="ts">
    import FooterLink from "$lib/components/FooterLink.svelte";
    import BookIcon from "./icons/BookIcon.svelte";
    import EnvelopeIcon from "./icons/EnvelopeIcon.svelte";
    import OpenedFolderIcon from "./icons/OpenedFolderIcon.svelte";
    import PeopleIcon from "./icons/PeopleIcon.svelte";
</script>

<footer
    class="w-11/12 h-20 bg-white rounded-2xl drop-shadow-2xl items-center justify-evenly flex flex-row p-10 {$$props.class}"
>
    <FooterLink href="/about/contact">
        <EnvelopeIcon slot="icon" width={20} height={20} fill="#71717A" />
        <span slot="label">Contact</span>
    </FooterLink>
    <FooterLink href="/about/contact">
        <PeopleIcon slot="icon" width={20} height={20} fill="#71717A" />
        <span slot="label">About Us</span>
    </FooterLink>
    <FooterLink href="/about/contact">
        <OpenedFolderIcon slot="icon" width={20} height={20} fill="#71717A" />
        <span slot="label">Terms of Use</span>
    </FooterLink>
    <FooterLink href="/about/contact">
        <BookIcon slot="icon" width={20} height={20} fill="#71717A" />
        <span slot="label">Guide</span>
    </FooterLink>
    <span class="text-dark-gray font-semibold">&copy; aktivan 2024.</span>
</footer>
