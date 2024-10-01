<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import { pb } from "$lib/services/pb.js";
</script>

<div class="flex justify-center mt-5">
    <NavBar username={pb.authStore.model?.firstName ?? "Login"} />
</div>

<div class="w-full h-full">
    <slot />
</div>
