import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
//import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: '../layout',
			assets: '../layout',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
	},
	preprocess: [vitePreprocess({})],
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/desafio-maeztra/layout' : '',
	}
};

export default config;
