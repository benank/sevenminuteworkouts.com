import {
	type WorkoutFitness,
	type WorkoutIntensity,
	type WorkoutType,
	WORKOUT_FITNESS_DATA,
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

Only include bodyweight exercises in the workout. The workout should be able to be completed anywhere, anytime, without equipment. Exercises can take inspiration from bodyweight fitness programs, such as Convict Conditioning, but should not be limited to them.

The user's current fitness level is the following, and the workout should be tailored to their level:
{fitnessTitle}
{fitnessDescription}

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

The description should be one sentence explaining what the exercise is and how to perform it. They should be written in the imperative tense.

Example response format:
{
  "steps": [
    {
      "exercise": "Jumping Jacks",
      "description": "Start with your feet together and hands by your sides, then jump your feet apart while raising your arms overhead, and quickly return to the starting position, and repeat!",
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

const REST_DURATION: Record<WorkoutIntensity, number> = {
	restorative: 20,
	balanced: 15,
	intense: 7
};

export function generateWorkoutPrompt(
	intensity: WorkoutIntensity,
	type: WorkoutType,
	fitness: WorkoutFitness
): string {
	const intensityData = WORKOUT_INTENSITY_DATA[intensity];
	const typeData = WORKOUT_TYPES_DATA[type];
	const fitnessData = WORKOUT_FITNESS_DATA[fitness];
	const restDuration = REST_DURATION[intensity];

	return WORKOUT_PROMPT.replaceAll('{intensityTitle}', intensityData.title)
		.replaceAll('{typeTitle}', typeData.title)
		.replaceAll('{intensityDescription}', intensityData.description)
		.replaceAll('{typeDescription}', typeData.description)
		.replaceAll('{restDuration}', restDuration.toString())
		.replaceAll('{fitnessTitle}', fitnessData.title)
		.replaceAll('{fitnessDescription}', fitnessData.description);
}
