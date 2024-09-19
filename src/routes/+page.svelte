<script>
    import NavBar from "$lib/components/NavBar.svelte";
    import OutlinedButton from "$lib/components/OutlinedButton.svelte";
    import Search from "$lib/components/Search.svelte";
    import AddClassroomButton from "$lib/components/AddClassroomButton.svelte";
    import SchoolIndicator from "$lib/components/SchoolIndicator.svelte";
    import ChooseGrade from "$lib/components/ChooseGrade.svelte";
    import SchoolDropdown from "$lib/components/SchoolDropdown.svelte";
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
