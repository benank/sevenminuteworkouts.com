<script lang="ts">
	import { workoutStore } from '../stores';
</script>

<div class="flex h-screen max-h-screen w-screen justify-center p-4">
	<div class="flex flex-col gap-4 pt-16">
		<h1 class="mb-4 text-balance text-center text-2xl font-semibold">Workout</h1>
		<div class="flex flex-col gap-4 pb-10">
			{#each $workoutStore?.steps ?? [] as step}
				<div class="flex flex-col gap-2">
					<h3 class="text-start text-xl font-semibold">
						{step.exercise} ({step.duration}s)
					</h3>
					<p class="font-normal">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
