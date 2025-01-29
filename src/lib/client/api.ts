import { get } from 'svelte/store';
import { workoutIntensityStore, workoutStore, workoutTypeStore } from './stores';

export const fetchWorkout = async () => {
	const type = get(workoutTypeStore);
	const intensity = get(workoutIntensityStore);
	const res = await fetch(`/api/v1/workout?type=${type}&intensity=${intensity}`);
	if (!res.ok) {
		throw new Error('Failed to fetch workout');
	}
	workoutStore.set(await res.json());
};
