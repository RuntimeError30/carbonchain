import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	preprocess: vitePreprocess(),
	kit: {
		env: {
			dir: './'
		}
	},
	adapter: adapter(),
	vite: {
		server: {
			cors: {
				origin: '*', // Allow all origins or specify your frontend domain
				methods: ['GET', 'POST', 'OPTIONS'],
				allowedHeaders: ['Content-Type']
			}
		}
	}
};

export default config;
