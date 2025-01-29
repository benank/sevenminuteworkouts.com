<script lang="ts">
	import { onMount } from 'svelte';
	import { pageStateStore, workoutStore } from '../stores';
	import { fetchWorkout } from '../api';

	onMount(() => {
		fetchWorkout();
	});

	$effect(() => {
		if ($pageStateStore === 'creating' && $workoutStore) {
			$pageStateStore = 'workout';
		}
	});
</script>

<div class="flex h-screen max-h-screen w-screen items-center justify-center p-4">
	<div class="flex flex-col items-center justify-center gap-2">
		<h1 class="mb-4 text-balance text-center text-2xl font-semibold">Creating your workout...</h1>
		<video
			src="/assets/seven.webm"
			class="fadeIn aspect-square w-60"
			controls={false}
			muted
			autoplay
			loop
		></video>
	</div>
</div>

<style>
	.fadeIn {
		animation: fadeIn ease-in 0.5s;
		animation-fill-mode: forwards;
		opacity: 0;
	}

	@keyframes fadeIn {
		from {
			transform: scale(0.9);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
