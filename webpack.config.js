'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const webpack = require('webpack');
module.exports = {
  mode: args.env !== 'dev'?"production":'development', 

  entry: path.resolve(__dirname, "./static/index.js"), // string | object | array
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, "./static/assets"), // string
    filename: "[name].js", // 用于多个入口点(entry point)（出口点？）
  },

  module: {
    // 关于模块配置

    rules: [
      // 模块规则（配置 loader、解析器等选项）

      {
        test: /\.jsx?$/,
		include: [
          path.resolve(__dirname, "./static")
        ],
		exclude: /(node_modules)/,
		use:[
		{
			loader: 'babel-loader',
			options: {
			  presets: ["env","stage-2","react"],
			  cacheDirectory: true
			}
		}
		]
		
        
      }
    ]
  },
  plugins: [
	new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.NamedModulesPlugin()
  ]
}