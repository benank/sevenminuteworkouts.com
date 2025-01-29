import { z } from 'zod';

export const WorkoutStepSchema = z.object({
	exercise: z.string().min(1, 'Exercise name is required'),
	description: z.string().min(1, 'Description is required'),
	duration: z.number().int().positive()
});

export type WorkoutStep = z.infer<typeof WorkoutStepSchema>;

export const WorkoutSchema = z.object({
	steps: z.array(WorkoutStepSchema)
});

export type Workout = z.infer<typeof WorkoutSchema>;
