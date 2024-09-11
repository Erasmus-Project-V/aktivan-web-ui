<script lang="ts">
    import logo from "$lib/assets/aktivan-web-logo.png";
    import PersonIcon from "./icons/PersonIcon.svelte";

    export let username: string;
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
    <div class="flex flex-row items-center justify-center text-dark-gray gap-2 uppercase">
        <PersonIcon />
        <span class="text-sm font-bold">{username}</span>
    </div>
</nav>
