var path = require('path');

var dirs = {
	app: path.resolve(__dirname, 'app'),
	dist: path.resolve(__dirname, 'dist'),
};

module.exports = {
	context: dirs.app,
	entry: './index.js',
	output: {
		path: dirs.dist,
		filename: 'app.bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015'],
						},
					},
				],
			},
		],
	},
	devtool: 'source-map',
	devServer: {
		contentBase: dirs.dist,
	},
};
