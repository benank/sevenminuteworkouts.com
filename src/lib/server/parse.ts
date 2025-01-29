import { WorkoutSchema, type Workout } from '$lib/shared/models';

const regex = /```json(.*?)```/gs;

export const parseWorkout = (workout: string) => {
	const matches = workout.matchAll(regex);
	if (!matches) {
		throw new Error('Workout is not valid JSON');
	}

	for (const match of matches) {
		return WorkoutSchema.parse(JSON.parse(match[1]));
	}

	throw new Error('Workout is not valid JSON');
};
