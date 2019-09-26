const path = require("path");
const baseWebpack = require("./webpack.base");
const merge = require("webpack-merge");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

require("@babel/polyfill");

function resolve(url) {
	return path.resolve(__dirname, "../" + url);
}
const pro = {
	devtool: false,
	mode: "production",
	entry: {
		app: ["@babel/polyfill",resolve("src/index.tsx")]
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader",
						options: {
							config: {
								path: path.resolve(__dirname, "./postcss.config.js")
							}
						}
					},
					{
						loader: "less-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader"
					},
					{
						loader: "postcss-loader",
						options: {
							config: {
								path: path.resolve(__dirname, "./postcss.config.js")
							}
						}
					}
				]
			}
		]
	},
	output: {
		path: resolve("dist"),
		filename: "js/[name].[chunkhash:8].js",
		publicPath: "./",
		chunkFilename: "chunk/[name].[chunkhash:8].chunk.js"
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			name: "vender",
			minSize: 10,
			minChunks: 5,
			cacheGroups: {
				common: {
					name: "common",
					chunks: "all",
					minChunks: 4,
					reuseExistingChunk: true,
					enforce: true
				},
				antd: {
					name: "antd",
					chunks: "all",
					test: /[\\/]node_modules[\\/antd]/,
					minChunks: 3,
					reuseExistingChunk: true,
					enforce: true
				},
				echarts: {
					name: "echarts",
					chunks: "all",
					test: /[\\/]node_modules[\\/echarts]/,
					minChunks: 3,
					reuseExistingChunk: true,
					enforce: true
				},
				styles: {
					name: "styles",
					test: /(\.less|\.css)$/,
					chunks: "all",
					reuseExistingChunk: true,
					enforce: true
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				parallel: 10,
				terserOptions: {
					ie8: true,
					warnings: true,
					output: {
						comments: false,
						beautify: false
					},
					compress: {
						drop_console: false,
						passes: 2
					}
				}
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		minimize: true,
		mangleWasmImports: true
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[chunkhash:8].css",
			chunkFilename: "[name].[chunkhash:8].css"
		}),
		new HtmlWebpackPlugin({
			title: "title",
			template: resolve("index.html"),
			inject: true,
			chunks: ["app", "vender", "commons"],
			chunksSortMode: "auto",
			minify: {
				removeAttributeQuotes: true
			}
		})
	]
};
module.exports = merge(baseWebpack, pro);
