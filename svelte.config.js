import { vitePreprocess } from "@astrojs/svelte";
import UnoCSS from "@unocss/svelte-scoped/preprocess";

const prod = process.env.NODE_ENV !== "development";
export default {
	preprocess: [
		vitePreprocess(),
		UnoCSS({
			combine: prod,
			configOrPath: "./uno.config.ts",
		}),
	],
};
