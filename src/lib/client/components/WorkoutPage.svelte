<script lang="ts">
	import { workoutStore } from '../stores';
	import CircularProgress from './CircularProgress.svelte';
	import Button from './ui/button/button.svelte';

	let started = $state(false);
	let step = $state(0);
	let exercise = $derived($workoutStore!.steps[step]);
	const numSteps = $derived($workoutStore!.steps.length);
	// svelte-ignore non_reactive_update
	let start: (duration: number) => void;
	let finished = $state(false);

	const startWorkout = () => {
		started = true;
		startNextExercise();
	};

	const startNextExercise = () => {
		start(exercise.duration);
	};

	const onFinish = () => {
		if (step < numSteps - 1) {
			step++;
			startNextExercise();
		} else {
			finished = true;
		}
	};

	const onProgress = (progress: number) => {
		console.log('progress', progress);
	};
</script>

<div class="flex h-screen max-h-screen w-screen items-center justify-center">
	<div class="flex flex-col gap-4 pt-16">
		<h1 class="mb-4 text-balance text-center text-2xl font-semibold">It's time to work out!</h1>
		<div class="flex flex-col gap-4 pb-10">
			{#if !started}
				<Button onclick={startWorkout}>Start</Button>
			{:else}
				<h2 class="w-full bg-orange-700 p-2 text-center font-bold">{exercise.exercise}</h2>
				<p class="px-4 text-sm">{exercise.description}</p>
			{/if}
			<div class="p-4">
				<CircularProgress bind:start {onFinish} {onProgress} />
			</div>
		</div>
	</div>
</div>
