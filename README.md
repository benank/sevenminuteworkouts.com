# [sevenminuteworkouts.com](https://sevenminuteworkouts.com)

[**Try it out here!**](https://sevenminuteworkouts.com)

Stop thinking about working out and just do it. AI generated workouts that you can complete in just seven minutes.

This is a workout app powered by AI. Based on your inputs, such as energy level, workout type, and fitness level, it generates a workout that you can complete in seven minutes.

I built this for myself because I kept procrastinating working out. So I procrastinated more and built this, and now I actually work out (at least for seven minutes).

It uses Groq for lightning-fast inference with `Deepseek-R1-Distill-Llama-70b` for reasoning, because you know, the AI needs to think about how many exercises can fit into seven minutes! 🤪

More about the tech stack:
 - [Groq](https://groq.com) for AI inference
 - [SvelteKit](https://svelte.dev/) for the full stack (frontend + backend API)
 - [shadcn-svelte](https://next.shadcn-svelte.com/) for some nice prebuilt components
 - [Cloudflare Pages](https://pages.cloudflare.com/) for deployment, though it can be deployed on any platform
 - [Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/) for monitoring and caching AI requests

## Developing

1. Run `npm install` to install dependencies.
2. Create a `.env` file and add your [Groq API key](https://console.groq.com/keys): `GROQ_API_KEY="XXXX"`
3. If you want to use Cloudflare AI Gateway, set the following in your `.env` file:
```
CLOUDFLARE_AI_GATEWAY_API_TOKEN="..."
CLOUDFLARE_AI_GATEWAY_ID="..."
CLOUDFLARE_ACCOUNT_ID="..."
```
4. If you don't want to use Cloudflare AI Gateway, set the following in your `.env` file to disable it:
```
DISABLE_CLOUDFLARE_API_GATEWAY=true
```
5. Run `npm run dev` to run the app locally.