// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// UNCOMMENT TO DEPLOY AS GITHUB PAGES
	// site: 'https://utile-design.github.io',
	integrations: [
		starlight({
			title: 'Utile Docs',
			social: {
				github: 'https://github.com/utile-design',
			},
			sidebar: [
				{
					label: 'Procedures',
					autogenerate: { directory: 'project_procedures' },
				},
				{
					label: 'Administration',
					autogenerate: { directory: 'administration' },
				},
				{
					label: 'Analytics',
					autogenerate: { directory: 'analytics' },
				}				
			],
		}),
	],
});
