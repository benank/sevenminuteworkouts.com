import { dev } from '$app/environment';
import { env } from '$env/dynamic/public';

export const isProduction = !!env.PUBLIC_PROD;
export const isStaging = !isProduction && !dev;
export const isDev = dev;