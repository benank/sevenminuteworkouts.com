<script lang="ts">
	import { Tween } from 'svelte/motion';
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
	let totalProgress = new Tween(0);

	const startWorkout = () => {
		started = true;
		totalProgress.set(1, {
			duration: $workoutStore!.steps.reduce((acc, step) => acc + step.duration, 0) * 1000
		});
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

	const onProgress = (progress: number) => {};
</script>

{#if !finished}
	<div
		class="flex h-screen max-h-screen w-screen"
		class:justify-center={!started}
		class:items-center={!started}
	>
		<div class="flex flex-col gap-4" class:items-center={!started}>
			{#if !started}
				<h1 class="mb-4 text-balance text-center text-2xl font-semibold">It's time to work out!</h1>
			{/if}
			<div class="flex h-full w-full flex-col items-center gap-4 pb-10">
				{#if !started}
					<Button class="w-full" onclick={startWorkout}>Start</Button>
				{:else}
					<div>
						<h2 class="w-screen bg-orange-700 p-4 text-center text-4xl font-bold">
							{exercise.exercise}
						</h2>
						<div class="flex w-screen flex-col items-center justify-center bg-orange-900 p-4">
							<p class="max-w-screen-sm text-balance text-center text-lg">{exercise.description}</p>
						</div>
					</div>
				{/if}
				<div
					class="flex h-full w-full max-w-screen-sm flex-col justify-center p-4"
					class:hidden={!started}
				>
					<CircularProgress bind:start {onFinish} {onProgress} />
				</div>
				<div
					class="absolute inset-0 top-auto h-4 bg-sky-500"
					style="width: {totalProgress.current * 100}%"
				></div>
			</div>
		</div>
	</div>
{:else}
	<div
		class="flex h-screen max-h-screen w-screen flex-col items-center justify-center gap-8 text-center"
	>
		<h1 class="text-4xl font-bold">Great job! You've completed your workout!</h1>
		<h3 class="text-xl">That wasn't so bad, was it?</h3>
	</div>
{/if}
