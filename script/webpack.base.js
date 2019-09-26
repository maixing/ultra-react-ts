/**
* 
* Created by maixing on 2019/09/26 11:42:20
*
*/
const path = require("path");
const WebpackBar = require("webpackbar");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");

function resolve(url) {
	return path.resolve(__dirname, "../" + url);
}

module.exports = {
	resolve: {
		modules: [path.resolve(__dirname, "../node_modules"), resolve("src")],
		extensions: [".js", ".ts", ".tsx", ".css", ".less"],
		alias: {
			"@": resolve("src"),
			"views":resolve("src/views"),
			"store":resolve("src/stores"),
			"service":resolve("src/service"),
			"components":resolve("src/components")
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [resolve("node_modules"), resolve("node_modules/@antv")],
				use: "babel-loader"
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				options: {
					transpileOnly: true,
					getCustomTransformers: () => ({
						before: [
							tsImportPluginFactory({
								libraryName: "antd",
								libraryDirectory: "lib",
								style: true
							})
						]
					}),
					compilerOptions: {
						module: "es2015"
					}
				},
				include: resolve("src"),
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192000
						}
					}
				]
			}
		]
	},
	plugins: [
		new WebpackBar({
			minimal: false,
			profile: false,
			name: "任务执行进度"
		})
	]
};
