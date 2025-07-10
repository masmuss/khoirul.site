import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetWebFonts,
	presetWind4,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

import {
	createLocalFontProcessor,
} from '@unocss/preset-web-fonts/local'

export default defineConfig({
	shortcuts: [
		{
			"bg-main": "bg-hex-eef5fc dark:bg-hex-0d1117",
			"text-main": "text-hex-555555 dark:text-hex-bbbbbb",
			"text-link": "text-dark dark:text-white",
			"border-main": "border-gray-300 dark:border-gray-600",
		},
		{
			"text-title": "text-link text-4xl font-800",
			"nav-link":
				"text-link opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer",
			"prose-link":
				"text-link text-nowrap cursor-pointer border-b-1 !border-opacity-30 hover:!border-opacity-100 border-neutral-500 hover:border-gray-600 dark:border-neutral-500 hover:dark:border-gray-400 transition-border-color duration-200 decoration-none",
			"container-link":
				"p-2 opacity-60 hover:opacity-100 cursor-pointer hover:bg-gray-500 !bg-opacity-10 transition-colors transition-opacity duration-200",
		},
		{
			"hr-line":
				"w-14 mx-auto my-8 border-solid border-1px !border-gray-200 !dark:border-gray-800",
		}
	],
	presets: [
		presetWind4({
			dark: "class",
			preflights: {
				reset: true,
			}
		}),
		presetAttributify(),
		presetIcons({
			collections: {
				carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
				ri: () => import('@iconify-json/ri/icons.json').then(i => i.default),
			},
			extraProperties: {
				'display': 'inline-block',
				'height': '1.2em',
				'width': '1.2em',
				'vertical-align': 'text-bottom',
			}
		}),
		presetTypography(),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: "Geist:400,500,600,700,800",
				mono: "DM Mono:400,500,600,700",
			},
			processors: createLocalFontProcessor()
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	safelist: [
		"i-ri-linkedin-box-line",
		"i-ri-instagram-line",
		"i-ri-github-line",
		"i-ri-twitter-x-line",
		"i-ri-terminal-box-line",
		"i-carbon-unknown",
		"i-carbon-campsite",
		"i-carbon-machine-learning-model",
		"i-carbon-cloud-monitoring",
		"i-carbon-carbon-for-mobile",
		"i-carbon-network-1",
		"i-carbon-decision-tree",
		"i-carbon-api-1",
		"i-carbon-temperature-water",
		"i-carbon-close",
	],
});
