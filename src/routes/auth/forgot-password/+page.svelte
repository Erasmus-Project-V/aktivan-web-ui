<script lang="ts">
    import Button from "$lib/components/SolidButton.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Header from "$lib/components/Header.svelte";
    import Input from "$lib/components/Input.svelte";
</script>

<!-- <Header>Welcome!</Header>

<Button>Sign Up</Button> -->
<div class="w-full h-full flex flex-col justify-center items-center">
    <!-- <div class="flex flex-col flex-grow"> -->
    <div class="w-96 gap-3 h-full flex flex-col items-center justify-center">
        <h1 class="text-white text-4xl font-bold">Welcome!</h1>
        <p class="text-white text-center">
            Utilize this innovative platform to monitor and encourage your students' outdoor
            activities, track their progress, and celebrate their achievements!
        </p>
        <div class="bg-white px-12 h-8/12 rounded-2xl flex flex-col items-center gap-6 py-6">
            <h2 class="text-lg self-start">Forgot password</h2>
            <hr class="h-[0.04rem] opacity-80 w-56 bg-light-gray-2 border-none self-start" />
            <Input label="Email" type="text" placeholder="Your email address" />
            <Button size="lg">Send reset link</Button>
        </div>
    </div>
    <!-- </div> -->
</div>
