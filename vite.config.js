import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build:{
		lib:{
			entry: './src/lib/index.js',
			name: 'MyComponent',
			fileName: 'my-component',
			formats: ['es'],
		},
	},
	plugins: [sveltekit()]
});
