<script lang="ts">
	import CreatingPage from '$lib/client/components/CreatingPage.svelte';
	import HomePage from '$lib/client/components/HomePage.svelte';
	import IntensityPage from '$lib/client/components/IntensityPage.svelte';
	import TypePage from '$lib/client/components/TypePage.svelte';
	import WorkoutPage from '$lib/client/components/WorkoutPage.svelte';
	import type { PageState } from '$lib/client/models';
	import { pageStateStore } from '$lib/client/stores';
	import FitnessLevel from '$lib/client/components/FitnessLevel.svelte';

	const Pages: Record<PageState, any> = {
		home: HomePage,
		intensity: IntensityPage,
		type: TypePage,
		fitness: FitnessLevel,
		creating: CreatingPage,
		workout: WorkoutPage
	};
</script>

<svelte:component this={Pages[$pageStateStore]} />
