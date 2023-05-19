const { type } = require('os')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		filename: path.resolve(__dirname, 'src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		assetModuleFilename: '[name][ext]',
		clean: true
	},
	performance: {
		hints: false,
		maxAssetSize: 512000,
		maxEntrypointSize: 512000,
	},
	devServer: {
		port: 9000,
		compress: true,
		hot: true,
		liveReload: true,
		static: {
			directory: path.join(__dirname, 'dist')
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			// {
			// 	test: /\.(png|svg|jpe?g).$/i,
			// 	type: 'asset/resource'
			// }
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'Notes App',
			filename: 'index.html',
			template: 'src/index.html'
		})
	]
}