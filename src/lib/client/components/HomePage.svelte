<script lang="ts">
	import { pageStateStore } from '../stores';
	import Button from './ui/button/button.svelte';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-4 p-4">
	<h1 class="mb-4 text-center text-4xl font-bold">Got seven minutes?<br /><br />Let's work out.</h1>
	<Button class="w-full max-w-60" onclick={() => ($pageStateStore = 'intensity')}>Start</Button>
</div>
