var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template:__dirname + '/app/index.html',
	filename:'index.html',
	inject:'body'
});


//var ReactStylePlugin = require('react-style-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
entry:__dirname + '/app/index.js',
module: {loaders:[
{
test:/\.js$/,
exclude:/node_modules/,
loader:'babel-loader'
},
{
    test: /\.css$/,
    exclude:/node_modules/,
    loader: ExtractTextPlugin.extract('css')
 },
]},
output:{
filename:'transformed.js',
path:__dirname+'/build'
},
plugins:[HTMLWebpackPluginConfig, new ExtractTextPlugin('/css/', {
        allowChunks: true
      })]
};


