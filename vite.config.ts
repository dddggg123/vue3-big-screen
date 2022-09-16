import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		extensions: [".js", ".vue", ".json", "scss", ".ts"],
		alias: [
			{
				find: "@",
				replacement: resolve(__dirname, "src"),
			},
			{
				find: "components",
				replacement: resolve(__dirname, "src/components"),
			},
			{
				find: "utils",
				replacement: resolve(__dirname, "src/utils"),
			},
		],
	},
	plugins: [vue()],
	server: {
		open: true,
		port: 6688,
	},
});
