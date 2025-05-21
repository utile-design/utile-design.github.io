// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
    site: 'https://utile-design.github.io',
    integrations: [starlight({
        title: 'Utile Docs',
        logo: {
            light: './src/assets/logo-light.svg',
            dark: './src/assets/logo-dark.svg'
        },
        favicon: '/favicon.png',
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/utile-design' }
        ],
        sidebar: [
            'get_started',
            {
                label: 'Software Environments',
                autogenerate: { directory: 'environments' },
            },
            {
                label: 'Project Lifecycle',
                autogenerate: { directory: 'lifecycle' },
            },
            {
                label: 'Analytics',
                items: 
                    [
                        {
                            label: 'QGIS Model Builder',
                            items: [
                                'analytics/qgis_model_standards',
                                { 
                                    label: 'Template', 
                                    link: 'https://github.com/utile-design/',
                                    badge: "GitHub",
                                    attrs: { target: '_blank' },
                                },
                            ]
                        },
                        {
                            label: 'PyQGIS',
                            items: [
                                'analytics/pyqgis_standards',
                                { 
                                    label: 'Template', 
                                    link: 'https://github.com/utile-design/',
                                    badge: "GitHub",
                                    attrs: { target: '_blank' },
                                },
                            ]
                        },
                        {
                            label: 'R',
                            items: [
                                'analytics/r_standards',
                                { 
                                    label: 'Template', 
                                    link: 'https://github.com/utile-design/r-template',
                                    badge: "GitHub",
                                    attrs: { target: '_blank' },
                                },
                            ]
                        },
                        {
                            label: 'Python',
                            items: [
                                'analytics/python_standards',
                                { 
                                    label: 'Template', 
                                    link: 'https://github.com/utile-design/python-template',
                                    badge: "GitHub",
                                    attrs: { target: '_blank' },
                                },
                            ]
                        }
                    ],
            }				
        ],
        lastUpdated: true,
        customCss: [
            // Path to your Tailwind base styles:
            './src/tailwind.css',
          ],
		})
    ],
});