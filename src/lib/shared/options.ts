export interface TitleAndDescription {
	title: string;
	description: string;
}

export const WORKOUT_INTENSITIES = ['restorative', 'balanced', 'intense'] as const;
export type WorkoutIntensity = (typeof WORKOUT_INTENSITIES)[number];
export const WORKOUT_INTENSITY_DATA: Record<WorkoutIntensity, TitleAndDescription> = {
	restorative: {
		title: 'Restorative',
		description:
			'Unwind and recharge with gentle movements and stretches. Perfect for days when you need to slow down and prioritize recovery.'
	},
	balanced: {
		title: 'Balanced',
		description:
			'A perfect blend of cardio and strength training to keep you moving without overexerting. Great for maintaining fitness and leaving you feeling refreshed.'
	},
	intense: {
		title: 'Intense',
		description:
			"Push your limits with a challenging workout designed to maximize calorie burn and intensity. Ideal for days when you're ready to give it your all and finish feeling accomplished."
	}
};

export const WORKOUT_TYPES = [
	'upper_body',
	'lower_body',
	'core',
	'cardio',
	'full_body',
	'hiit',
	'flex'
] as const;
export type WorkoutType = (typeof WORKOUT_TYPES)[number];
export const WORKOUT_TYPES_DATA: Record<WorkoutType, TitleAndDescription> = {
	full_body: {
		title: 'Full Body Mix',
		description:
			'Work all major muscle groups with a mix of exercises like squats, push-ups, lunges, and planks for a comprehensive workout.'
	},
	cardio: {
		title: 'Cardio Blast',
		description:
			'Get your heart pumping with high-energy exercises like jumping jacks, burpees, and mountain climbers to maximize calorie burn.'
	},
	hiit: {
		title: 'HIIT (High-Intensity)',
		description:
			'Push your limits with short bursts of intense exercises like jump squats, plank jacks, and sprints, followed by brief rest periods.'
	},
	flex: {
		title: 'Mobility & Flexibility',
		description:
			"Improve your range of motion with gentle stretches and flows like downward dog, child's pose, and leg swings to aid recovery."
	},
	upper_body: {
		title: 'Arms & Shoulders',
		description:
			'Target your arms and shoulders with exercises like push-ups, arm circles, and shoulder taps to build strength and tone.'
	},
	lower_body: {
		title: 'Legs & Glutes',
		description:
			'Strengthen your lower body with squats, lunges, glute bridges, and calf raises to build power and definition.'
	},
	core: {
		title: 'Core & Abs',
		description:
			'Focus on your core muscles with planks, crunches, Russian twists, and leg raises to improve stability and definition.'
	}
};

export const WORKOUT_FITNESS = ['couch_potato', 'casual', 'gym', 'fit', 'olympian'] as const;
export type WorkoutFitness = (typeof WORKOUT_FITNESS)[number];
export const WORKOUT_FITNESS_DATA: Record<WorkoutFitness, TitleAndDescription> = {
	couch_potato: {
		title: 'Couch Potato',
		description:
			"You've perfected the art of sitting. Your daily exercise is walking to the fridge and back."
	},
	casual: {
		title: 'Casual',
		description:
			'You maintain average fitness through regular walking and light activities. Your consistency keeps you in good shape without needing a gym routine.'
	},
	gym: {
		title: 'Gym Rat',
		description:
			'You hit the gym regularly but still enjoy your guilty pleasure foods. Your fitness journey is all about balance... and maybe a few protein shakes.'
	},
	fit: {
		title: 'Fit Beast',
		description:
			"You're in top physical condition. People might actually think you're a professional athlete."
	},
	olympian: {
		title: 'Olympian',
		description:
			"You're at the peak of human physical fitness. You could probably win a gold medal in just about anything. You're a fitness legend."
	}
};
