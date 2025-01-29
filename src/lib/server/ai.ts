import type { WorkoutIntensity, WorkoutType } from '$lib/shared/options';
import { generateWorkoutPrompt } from './ai/prompt';
import { getChatCompletion } from './groq';
import { parseWorkout } from './parse';

export const generateWorkout = async (type: WorkoutType, intensity: WorkoutIntensity) => {
	const prompt = generateWorkoutPrompt(intensity, type);

	for (let i = 0; i < 3; i++) {
		try {
			const completion = await getChatCompletion([
				{
					role: 'user',
					content: prompt
				}
			]);

			if (!completion) {
				throw new Error('No completion returned');
			}

			return parseWorkout(completion);
		} catch (error) {
			console.error(error);
		}
	}
};
