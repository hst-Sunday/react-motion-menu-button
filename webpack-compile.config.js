const path = require('path');
const ClearWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: './src/floatButton/floatButton.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: "reactMotionMenuButton",
    libraryTarget: 'umd'
  },
  externals : ["react", "react-dom", "prop-types", "react-motion"],
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
  plugins: [new ClearWebpackPlugin()],
  resolve: {
    extensions: [".js", ".jsx"]
  },
};