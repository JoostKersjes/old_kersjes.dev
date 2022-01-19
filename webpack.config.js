const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // Delete dist folder before build
    clean: true,
  },
  // Minimizes js in production mode
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    // To resolve imports without file extensions
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    // Enable gzip compression for everything served
    compress: true,
    // Open a new tab after starting
    open: true,
  },
  plugins: [
    // Automatically create link in index.html
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        // Typescript laoding for .ts(x) files
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
