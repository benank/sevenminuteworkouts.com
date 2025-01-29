<script lang="ts">
	import CreatingPage from '$lib/client/components/CreatingPage.svelte';
	import HomePage from '$lib/client/components/HomePage.svelte';
	import IntensityPage from '$lib/client/components/IntensityPage.svelte';
	import TypePage from '$lib/client/components/TypePage.svelte';
	import WorkoutPage from '$lib/client/components/WorkoutPage.svelte';
	import { pageStateStore } from '$lib/client/stores';
</script>

{#if $pageStateStore === 'home'}
	<HomePage />
{:else if $pageStateStore === 'intensity'}
	<IntensityPage />
{:else if $pageStateStore === 'type'}
	<TypePage />
{:else if $pageStateStore === 'creating'}
	<CreatingPage />
{:else if $pageStateStore === 'workout'}
	<WorkoutPage />
{/if}
