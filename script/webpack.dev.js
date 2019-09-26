/**
* 
* Created by maixing on 2019/09/26 11:42:26
*
*/
const path = require("path");
const webpack = require("webpack");
const baseWebpack = require("./webpack.base");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const portfinder = require("portfinder");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

function resolve(url) {
	return path.resolve(__dirname, "../" + url);
}

let dev = {
	mode: "development",
	entry: {
		app: resolve("src/index.tsx")
	},
	output: {
		path: resolve("lib"),
		filename: "app.js",
		publicPath: ""
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1
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
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			}
		]
	},
	devServer: {
		clientLogLevel: "warning",
		historyApiFallback: true,
		hot: true,
		hotOnly: true,
		compress: true,
		host: "0.0.0.0",
		port: parseInt(process.env.PORT),
		open: false,
		overlay: { warnings: false, errors: true },
		publicPath: "",
		quiet: true
	},
	node: {
		setImmediate: false,
		dgram: "empty",
		fs: "empty",
		net: "empty",
		tls: "empty",
		child_process: "empty"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "title",
			template: resolve("index.html"),
			inject: true,
			minify: {
				removeAttributeQuotes: true
			}
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: "http://localhost:" + process.env.PORT })
	]
};
const config = merge(baseWebpack, dev);
module.exports = new Promise((resolve, reject) => {
	portfinder.basePort = parseInt(process.env.PORT);
	portfinder.getPort((err, port) => {
	  if (err) {
		reject(err);
	  } else {
		config.devServer.port = port;
		config.plugins.push(
		  new FriendlyErrorsPlugin({
			compilationSuccessInfo: {
			  messages: [`程序已经启动，访问地址为: http://localhost:${port}`]
			}
		  })
		);
		resolve(config);
	  }
	});
  });
