<script lang="ts">
    import AccountIcon from "./icons/AccountIcon.svelte";
    import { goto } from "$app/navigation";

    export let studentId: string;
    export let classId: string;
    export let studentName: string;
    export let totalPoints: number;
    export let runningPoints: number;
    export let cyclingPoints: number;
    export let hikingPoints: number;
    export let walkingPoints: number;
    export let skatingPoints: number;
</script>

<tr class="text-blue-gray font-bold border-y-2 border-light-gray-1 p-10 text-center">
    <th scope="row" class="flex flex-row items-center gap-4 py-2">
        <AccountIcon width={40} height={40} />
        <span class="text-dark-blue font-medium text-lg">{studentName}</span>
    </th>
    <td>{totalPoints}</td>
    <td>{runningPoints}</td>
    <td>{cyclingPoints}</td>
    <td>{hikingPoints}</td>
    <td>{walkingPoints}</td>
    <td>{skatingPoints}</td>
    <td>
        <button on:click={() => goto(`/account/schools/classes/${classId}/students/${studentId}`)} class="text-black opacity-50 font-bold text-lg"> View </button>
    </td>
</tr>
