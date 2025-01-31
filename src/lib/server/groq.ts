import { env } from '$env/dynamic/private';
import { isProduction } from '$lib/shared/env';
import Groq from 'groq-sdk';

const USE_CLOUDFLARE_API_GATEWAY = !env.DISABLE_CLOUDFLARE_API_GATEWAY;

const apiKey = env.GROQ_API_KEY;
const accountId = env.CLOUDFLARE_ACCOUNT_ID;
const gatewayId = env.CLOUDFLARE_AI_GATEWAY_ID;
const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/groq`;

const groq = new Groq({
	apiKey,
	baseURL: USE_CLOUDFLARE_API_GATEWAY ? baseURL : undefined,
	defaultHeaders: USE_CLOUDFLARE_API_GATEWAY
		? {
				'cf-aig-authorization': `Bearer ${env.CLOUDFLARE_AI_GATEWAY_API_TOKEN}`,
				'cf-aig-metadata': JSON.stringify({
					prod: isProduction
				})
			}
		: undefined
});

const model = 'deepseek-r1-distill-llama-70b';

export const getChatCompletion = async (
	messages: Groq.Chat.Completions.ChatCompletionMessageParam[]
) => {
	const chatCompletion = await groq.chat.completions.create({
		messages,
		model,
		max_completion_tokens: 4096,
		temperature: 0.6,
		stream: false,
		response_format: { type: 'json_object' }
	});

	return chatCompletion.choices[0].message.content;
};
