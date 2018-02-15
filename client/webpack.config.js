const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const APP_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'dist');
const ASSETS_DIR = path.join(__dirname, 'src', 'assets');


module.exports = {
	entry: APP_DIR,
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		compress: true,
		historyApiFallback: true,
		contentBase: ASSETS_DIR
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devtool: 'source-map',
	plugins: [
		new HtmlPlugin({
			inject: true,
			template: './src/index.html',
			filename: 'index.html',
		})
	]
};
