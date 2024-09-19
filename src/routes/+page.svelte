<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import OutlinedButton from "$lib/components/OutlinedButton.svelte";
    import Search from "$lib/components/Search.svelte";
    import AddClassroomButton from "$lib/components/AddClassroomButton.svelte";
    import SchoolIndicator from "$lib/components/SchoolIndicator.svelte";
    import ChooseGrade from "$lib/components/ChooseGrade.svelte";
    import SchoolDropdown from "$lib/components/SchoolDropdown.svelte";
    import StudentCard from "$lib/components/StudentCard.svelte";
    import AddStudentButton from "$lib/components/AddStudentButton.svelte";
    import ClassCard from "$lib/components/ClassCard.svelte";
    import ShareClassLink from "$lib/components/ShareClassLink.svelte";
    import ClassQrCode from "$lib/components/ClassQRCode.svelte";
    import ViewProfileDropdown from "$lib/components/ViewProfileDropdown.svelte";
    import ViewProfileDropdownOption from "$lib/components/ViewProfileDropdownOption.svelte";
    import PersonIconBlue from "$lib/components/icons/PersonIconBlue.svelte";
</script>

<NavBar username="Fran" />
<OutlinedButton>Sign Up</OutlinedButton>
<Search />
<AddClassroomButton />
<SchoolIndicator school="V. gimnazija" />
<ChooseGrade grade="2.C" />
<SchoolDropdown>
    <h1>Hi</h1>
</SchoolDropdown>
<StudentCard studentName="Karlo Vizec" />
<AddStudentButton />
<ClassCard className="1.C" />
<ShareClassLink link="https://google.com" />
<ClassQrCode
    imgSrc="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
/>
<ViewProfileDropdown>
    <ViewProfileDropdownOption label="Edit profile">
        <PersonIconBlue />
    </ViewProfileDropdownOption>
    <ViewProfileDropdownOption label="Edit profile">
        <PersonIconBlue />
    </ViewProfileDropdownOption>
    <ViewProfileDropdownOption label="Edit profile">
        <PersonIconBlue />
    </ViewProfileDropdownOption>
</ViewProfileDropdown>
