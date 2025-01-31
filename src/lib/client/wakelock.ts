let wakeLock: WakeLockSentinel | undefined;

/** Wakelock might be denied if the user has not interacted with the page first. */
export const requestWakeLock = async () => {
	if ('wakeLock' in navigator) {
		try {
			wakeLock = await navigator.wakeLock.request('screen');
		} catch (err) {
			console.warn(`Failed to request wakelock: ${err}`);
		}
	}
};

export const releaseWakeLock = async () => {
	await wakeLock?.release();
	wakeLock = undefined;
};
