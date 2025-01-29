<script lang="ts">
	import { WORKOUT_TYPES_DATA, type WorkoutType } from '$lib/shared/options';
	import { pageStateStore, workoutTypeStore } from '../stores';
	import Button from './ui/button/button.svelte';
</script>

<div class="flex h-screen max-h-screen w-screen p-4 justify-center">
	<div class="flex flex-col gap-4 pt-16">
		<h1 class="mb-4 text-balance text-center text-2xl font-semibold">Choose your workout focus</h1>
		<div class="flex flex-col gap-4 pb-10">
			{#each Object.entries(WORKOUT_TYPES_DATA) as [focus, data]}
				<Button
					class="flex h-fit w-full max-w-96 flex-col items-start justify-center gap-1 text-wrap text-start leading-6"
					onclick={() => {
						$pageStateStore = 'creating';
						$workoutTypeStore = focus as WorkoutType;
					}}
				>
					<h3 class="text-center text-xl font-semibold">
						{data.title}
					</h3>
					<p class="font-normal">{data.description}</p>
				</Button>
			{/each}
		</div>
	</div>
</div>
