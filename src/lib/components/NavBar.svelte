<script lang="ts">
    import { goto } from "$app/navigation";
    import logo from "$lib/assets/aktivan-web-logo.png";
    import GearIcon from "./icons/GearIcon.svelte";
    import LeaveIcon from "./icons/LeaveIcon.svelte";
    import PersonIcon from "./icons/PersonIcon.svelte";
    import PersonIconBlue from "./icons/PersonIconBlue.svelte";
    import ViewProfileDropdown from "./ViewProfileDropdown.svelte";
    import ViewProfileDropdownOption from "./ViewProfileDropdownOption.svelte";

    export let username: string;

    let showDropdown = false;

    function signOut() {
        goto("/auth/login");
        window.localStorage.clear();
    }
</script>

<nav
    class="w-[96%] rounded-xl h-20 flex flex-row justify-between p-5 bg-white bg-opacity-60 border-white border-[3px] pr-10"
>
    <div class="flex flex-row items-center justify-center gap-4">
        <img class="w-10 h-10" src={logo} alt="aktiVan logo" />
        <span class="text-dark-blue font-bold text-xl">
            akti<span class="text-dark-green">Van</span>
        </span>
    </div>
    <div class="flex items-center justify-center text-dark-gray gap-2 uppercase">
        <button
            on:click={() => (showDropdown = !showDropdown)}
            class="uppercase flex flex-row items-center justify-center gap-2"
        >
            <PersonIcon />
            <span class="text-sm font-bold">{username}</span>
        </button>
        {#if showDropdown}
            <div class="absolute mt-24">
                <ViewProfileDropdown>
                    <!-- <ViewProfileDropdownOption label="Edit profile">
                        <PersonIconBlue />
                    </ViewProfileDropdownOption>
                    <ViewProfileDropdownOption label="Settings">
                        <GearIcon />
                    </ViewProfileDropdownOption> -->
                    <ViewProfileDropdownOption
                        on:click={signOut}
                        labelClass="text-red"
                        label="Sign out"
                    >
                        <LeaveIcon />
                    </ViewProfileDropdownOption>
                </ViewProfileDropdown>
            </div>
        {/if}
    </div>
</nav>
