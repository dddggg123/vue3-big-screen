import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import compress from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
// import viteImagemin from 'vite-plugin-imagemin';

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
	server: {
		open: true,
		port: 6688,
	},
	build: {
		assetsDir: "./static",
		chunkSizeWarningLimit: 500,
		minify: "terser",
		cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
		terserOptions: {
			compress: {
				// warnings: false,
				drop_console: true, //打包时删除 console
				drop_debugger: true, //打包时删除 debugger
				pure_funcs: ["console.log"],
			},
			output: {
				// 去掉注释内容
				comments: true,
			},
		},
		rollupOptions: {
			output: {
				// manualChunks: {
				// 	// 拆分代码，这个就是分包，配置完后自动按需加载，现在还比不上webpack的splitchunk，不过也能用了。
				// 	vue: ["vue", "vue-router", "vuex"],
				// 	echarts: ["echarts"],
				// },
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.toString();
					}
				},
			},
		},
		brotliSize: false,
	},
	plugins: [
		vue(),
		compress(),
		// viteImagemin({
		// 	gifsicle: {
		// 		optimizationLevel: 7,
		// 		interlaced: false,
		// 	},
		// 	optipng: {
		// 		optimizationLevel: 7,
		// 	},
		// 	mozjpeg: {
		// 		quality: 20,
		// 	},
		// 	pngquant: {
		// 		quality: [0.8, 0.9],
		// 		speed: 4,
		// 	},
		// 	svgo: {
		// 		plugins: [
		// 			{
		// 				name: "removeViewBox",
		// 			},
		// 			{
		// 				name: "removeEmptyAttrs",
		// 				active: false,
		// 			},
		// 		],
		// 	},
		// }),
        visualizer(),
	],
});
