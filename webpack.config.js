const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: { 
    static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 3000,
   },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
        {
          // Typescript laoding for .ts(x) files
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ["ts-loader"],
        },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};