<script lang="ts">
	import { WORKOUT_INTENSITY_DATA, type WorkoutIntensity } from '$lib/shared/options';
	import { pageStateStore, workoutIntensityStore } from '../stores';
	import Button from './ui/button/button.svelte';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-4 p-4">
	<h1 class="mb-4 text-balance text-center text-2xl font-semibold">
		Choose your workout level
	</h1>
	{#each Object.entries(WORKOUT_INTENSITY_DATA) as [intensity, data]}
		<Button
			class="w-full max-w-96 h-fit text-wrap flex flex-col items-start justify-center gap-1 text-start leading-6"
			onclick={() => {
				$pageStateStore = 'type';
				$workoutIntensityStore = intensity as WorkoutIntensity;
			}}
		>
			<h3 class="text-center text-xl font-semibold">
				{data.title}
            </h3>
            <p class="font-normal">{data.description}</p>
		</Button>
	{/each}
</div>
