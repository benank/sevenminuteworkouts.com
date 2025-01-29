import { StatusCodes } from '$lib/shared/status_codes';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
	WORKOUT_INTENSITIES,
	WORKOUT_TYPES,
	type WorkoutIntensity,
	type WorkoutType
} from '$lib/shared/options';
import { generateWorkout } from '$lib/server/ai';

export const GET: RequestHandler = async ({ url, setHeaders }) => {
	const workoutType = url.searchParams.get('type');
	const workoutIntensity = url.searchParams.get('intensity');

	if (!workoutType || !workoutIntensity) {
		error(StatusCodes.BAD_REQUEST, 'Missing required parameters');
	}

	if (
		!WORKOUT_INTENSITIES.includes(workoutIntensity as any) ||
		!WORKOUT_TYPES.includes(workoutType as any)
	) {
		error(StatusCodes.BAD_REQUEST, 'Invalid parameters');
	}

	const workout = await generateWorkout(
		workoutType as WorkoutType,
		workoutIntensity as WorkoutIntensity
	);

	return new Response(JSON.stringify(workout), {
		headers: {
			'Cache-Control': 'public, max-age=21600, immutable', // Cache for 6 hours
			'Content-Type': 'application/json'
		}
	});
};
