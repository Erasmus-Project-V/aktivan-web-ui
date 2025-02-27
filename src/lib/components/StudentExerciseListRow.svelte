<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    export let exerciseName: string;
    export let exerciseId: string;
    export let points: number;
    export let km: string;
    export let hours: string;
</script>

<tr class="text-blue-gray font-bold border-y-2 border-light-gray-1 p-10 text-center text-2xl">
    <th scope="row" class="flex flex-row items-center gap-4 py-2">
        <div class="max-w-16 max-h-16">
            <slot />
        </div>
        <span class="text-dark-blue font-bold text-xl uppercase">{exerciseName}</span>
    </th>
    <td>{points}</td>
    <td>{km}</td>
    <td>{hours}</td>
    <td>
        <button
            on:click={() => goto(`${window.location.href}/activities/${exerciseId}`)}
            class="text-black opacity-50 font-bold text-xl"
        >
            History
        </button>
    </td>
</tr>
