import {
	type WorkoutIntensity,
	type WorkoutType,
	WORKOUT_INTENSITY_DATA,
	WORKOUT_TYPES_DATA
} from '$lib/shared/options';

const WORKOUT_PROMPT = `
You are an expert workout and exercise curator and planner. Here are the details of the workout you will create:

Type: {typeTitle}
{typeDescription}

Intensity: {intensityTitle}
{intensityDescription}

The workout should include:
- A 1-minute warm-up with dynamic stretches
- A series of exercises tailored to the selected type ({typeTitle})
- A 1-minute cool-down with static stretches
- Rest periods between exercises (duration varies based on intensity)
- Varied exercises and stretches appropriate for the intensity level

Format the response as JSON with the following structure:
{
  "steps": [
    {
      "exercise": string,
      "description": string,
      "duration": number
    }
  ]
}

Ensure the total duration does not exceed 7 minutes, including rest periods. For rest periods:
- {intensityTitle} workouts should have {restDuration} seconds of rest between exercises
- Adjust exercise duration based on intensity level
- The duration of each step is in seconds

Example response format:
{
  "steps": [
    {
      "exercise": "Jumping Jacks",
      "description": "High knees, full range of motion",
      "duration": 30
    },
    {
      "exercise": "Rest",
      "description": "Catch your breath",
      "duration": {restDuration}
    }
  ]
}
`;

export function generateWorkoutPrompt(intensity: WorkoutIntensity, type: WorkoutType): string {
	const intensityData = WORKOUT_INTENSITY_DATA[intensity];
	const typeData = WORKOUT_TYPES_DATA[type];

	let restDuration = 0;
	switch (intensity) {
		case 'restorative':
			restDuration = 30; // Longer rest for restorative workouts
			break;
		case 'balanced':
			restDuration = 20; // Moderate rest
			break;
		case 'intense':
			restDuration = 10; // Short rest for intense workouts
			break;
	}

	return WORKOUT_PROMPT.replace('{intensityTitle}', intensityData.title)
		.replace('{typeTitle}', typeData.title)
		.replace('{intensityDescription}', intensityData.description)
		.replace('{typeDescription}', typeData.description)
		.replace('{restDuration}', restDuration.toString());
}
