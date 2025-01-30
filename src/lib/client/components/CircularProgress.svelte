<script lang="ts">
	import { Tween } from 'svelte/motion';

	interface Props {
		start: (duration: number) => void;
		onFinish?: () => void;
		onProgress?: (progress: number) => void;
	}

	let { start = $bindable(), onProgress, onFinish }: Props = $props();
	const strokeDasharray = 2 * Math.PI * 45;
	let progress = new Tween(1);
	let duration = $state(0);
	$effect(() => {
		onProgress?.(1 - progress.current);

		if (progress.current === 0) {
			onFinish?.();
		}
	});

	start = async (d: number) => {
		duration = d;
		progress.set(1, {
			duration: 0
		});
		progress.set(0, {
			duration: duration * 1000
		});
	};
</script>

<div class="relative w-full">
	<svg viewBox="0 0 100 100" class="w-full">
		<circle cx="50" cy="50" r="45" fill="none" stroke="#64748b" stroke-width="10" />
		<circle
			cx="50"
			cy="50"
			r="45"
			fill="none"
			stroke="#facc15"
			stroke-width="10"
			stroke-linecap="round"
			stroke-dasharray={strokeDasharray}
			stroke-dashoffset={strokeDasharray * progress.current}
			transform="rotate(-90 50 50)"
		/>
	</svg>
	{#if progress.current < 1}
		<div
			class="absolute inset-0 m-auto flex items-center justify-center text-center text-7xl font-bold sm:text-9xl"
		>
			{Math.ceil(progress.current * duration)}
		</div>
	{/if}
</div>
