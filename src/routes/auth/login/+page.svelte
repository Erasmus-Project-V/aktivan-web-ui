<script lang="ts">
    import Button from "$lib/components/SolidButton.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Input from "$lib/components/Input.svelte";
    import { pb } from "$lib/services/pb";
    import { goto } from "$app/navigation";

    let error: string;

    let identity: string;
    let password: string;

    let rememberMe: boolean = false;

    async function signIn() {
        try {
            const authData = await pb.collection("teachers").authWithPassword(identity, password);

            localStorage.setItem("authToken", authData.token);
            localStorage.setItem("userId", authData.record.id);
        } catch (err: any) {
            if (err.status === 400) {
                (window as unknown as any).displayAlert("Invalid credentials", "error");
            }
        }

        await goto("/account/schools");
    }
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
        <div class="bg-white px-12 h-[25rem] rounded-2xl flex flex-col items-center gap-6 py-6">
            <Input
                {error}
                bind:value={identity}
                label="Email"
                type="text"
                placeholder="Your email address"
            />
            <Input
                {error}
                bind:value={password}
                label="Password"
                type="password"
                placeholder="Your password"
            />
            <a class="text-dark-blue self-end -mb-4 -mt-4" href="/auth/forgot-password"
                >Forgot password?
            </a>
            <span class="w-full flex items-center gap-2 justify-start">
                <Checkbox bind:checked={rememberMe} class="self-start" />
                Remember me
            </span>
            <Button on:click={signIn} size="lg">Sign In</Button>
            <!--            <span class="text-light-gray-2">-->
            <!--                Don't have an account yet?-->
            <!--                <a href="/auth/signup" class="text-dark-blue font-bold">Sign Up</a>-->
            <!--            </span>-->
        </div>
    </div>
    <!-- </div> -->
</div>
