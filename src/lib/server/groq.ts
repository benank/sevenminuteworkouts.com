import { env } from '$env/dynamic/private';
import Groq from 'groq-sdk';

const apiKey = env.GROQ_API_KEY;
// const accountId = '{account_id}';
// const gatewayId = '{gateway_id}';
// const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/groq`;

const groq = new Groq({
	apiKey
	// baseURL
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
		stream: false
	});
	return chatCompletion.choices[0].message.content;
};
