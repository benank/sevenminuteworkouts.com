import { WorkoutSchema, type Workout } from '$lib/shared/models';

export const parseWorkout = (workout: string) => {
	return WorkoutSchema.parse(JSON.parse(workout));
};
