import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const splitArrayByIndex = <T>(input: T[], numBins: number): T[][] =>
	Array.from({ length: numBins }, (_, i) => input.filter((_, index) => index % numBins === i));
