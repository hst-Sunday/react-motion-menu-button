const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ClearWebpackPlugin = require("clean-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./src/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 11230
          }
        }
      ]
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
  ]
  },
  plugins: [htmlWebpackPlugin, new ClearWebpackPlugin()],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3001
  }
};