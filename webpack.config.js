var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {

	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.[hash].js'
	},
    module: {
        loaders: [
            {
            	test: /\.js$/,
                loaders: ["react-hot", "babel-loader"],
		        exclude: /node_modules/
            },
            {
            	test: /\.css$/,
            	loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
				test: /\.html$/,
				loader: "file?name=[name].[ext]",
			}
        ]
    },
    plugins: [
    	new HtmlWebpackPlugin({
	      filename: 'index.html',
	      template: './src/manami.bhunia'
	    }),
	    new ExtractTextPlugin("styles.[hash].css")
    ]
};

module.exports = config;
