import { writable } from 'svelte/store';
import type { PageState } from './models';
import type { WorkoutFitness, WorkoutIntensity, WorkoutType } from '$lib/shared/options';
import type { Workout } from '$lib/shared/models';

export const pageStateStore = writable<PageState>('home');
export const workoutIntensityStore = writable<WorkoutIntensity | undefined>();
export const workoutTypeStore = writable<WorkoutType | undefined>();
export const workoutFitnessStore = writable<WorkoutFitness | undefined>();
export const workoutStore = writable<Workout | undefined>();