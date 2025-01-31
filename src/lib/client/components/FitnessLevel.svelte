<script lang="ts">
	import { WORKOUT_FITNESS_DATA, type WorkoutFitness } from '$lib/shared/options';
	import { pageStateStore, workoutFitnessStore } from '../stores';
	import Button from './ui/button/button.svelte';
</script>

<div class="flex h-screen max-h-screen w-screen flex-col items-center justify-center gap-4 p-4">
	<h1 class="mb-4 text-balance text-center text-2xl font-semibold">How fit are you right now?</h1>
	{#each Object.entries(WORKOUT_FITNESS_DATA) as [fitness, data]}
		<Button
			class="flex h-fit w-full max-w-96 flex-col items-start justify-center gap-1 text-wrap text-start leading-6"
			onclick={() => {
				$pageStateStore = 'creating';
				$workoutFitnessStore = fitness as WorkoutFitness;
			}}
		>
			<h3 class="text-center text-xl font-semibold">
				{data.title}
			</h3>
			<p class="font-normal">{data.description}</p>
		</Button>
	{/each}
</div>
