import { writable } from 'svelte/store';
import type { PageState } from './models';
import type { WorkoutIntensity, WorkoutType } from '$lib/shared/options';

export const pageStateStore = writable<PageState>('home');
export const workoutIntensityStore = writable<WorkoutIntensity | undefined>();
export const workoutTypeStore = writable<WorkoutType | undefined>();