<script lang="ts">
    import Button from "$lib/components/Button.svelte";
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
        <div class="bg-white w-full h-2/3 rounded-2xl flex flex-col items-center gap-6 p-8">
            <Input label="Name" type="text" placeholder="Your full name" />
            <Input label="Email" type="text" placeholder="Your email address" />
            <Input label="Password" type="password" placeholder="Your password" />
            <Input label="Confirm password" type="password" placeholder="Your password" />
            <Button size="lg">Sign Up</Button>
            <span class="text-light-gray-2">
                Already have an account?
                <a href="/auth/login" class="text-dark-blue font-bold">Log in</a>
            </span>
        </div>
    </div>
    <!-- </div> -->
</div>
