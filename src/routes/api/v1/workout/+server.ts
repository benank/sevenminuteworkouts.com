import { StatusCodes } from '$lib/shared/status_codes';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	WORKOUT_FITNESS,
	WORKOUT_INTENSITIES,
	WORKOUT_TYPES,
	type WorkoutFitness,
	type WorkoutIntensity,
	type WorkoutType
} from '$lib/shared/options';
import { generateWorkout } from '$lib/server/ai';

export const GET: RequestHandler = async ({ url }) => {
	const workoutType = url.searchParams.get('type');
	const workoutIntensity = url.searchParams.get('intensity');
	const workoutFitness = url.searchParams.get('fitness');

	if (!workoutType || !workoutIntensity || !workoutFitness) {
		error(StatusCodes.BAD_REQUEST, 'Missing required parameters');
	}

	if (
		!WORKOUT_INTENSITIES.includes(workoutIntensity as any) ||
		!WORKOUT_TYPES.includes(workoutType as any) ||
		!WORKOUT_FITNESS.includes(workoutFitness as any)
	) {
		error(StatusCodes.BAD_REQUEST, 'Invalid parameters');
	}

	const workout = await generateWorkout(
		workoutType as WorkoutType,
		workoutIntensity as WorkoutIntensity,
		workoutFitness as WorkoutFitness
	);

	return new Response(JSON.stringify(workout), {
		headers: {
			'Cache-Control': 'public, max-age=21600, immutable', // Cache for 6 hours
			'Content-Type': 'application/json'
		}
	});
};
