import { dev } from '$app/environment';
import { getRandomCatImage } from '$lib/server/test/cats';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals: { db } }) => {
	const page = Math.max(0, parseInt(url.searchParams.get('page') || '1'));
	const limit = 30;
	const offset = (page - 1) * limit;
	const posts = await db.getPosts(offset, limit);

	if (dev) {
		posts.map((post) => {
			post.image = getRandomCatImage();
		});
	}

	return new Response(JSON.stringify({ posts }), {
		headers: {
			'Cache-Control': 'public, max-age=300'
		}
	});
};
