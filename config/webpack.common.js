const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
               {
                 loader: "file-loader",
                 options: {
                  context: path.resolve(__dirname, 'src'),
                  name: '[path][name].[ext]'
                },
               }
             ]
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
               {
                 loader: "file-loader",
                 options: {
                  context: path.resolve(__dirname, 'src'),
                  name: '[path][name].[ext]'
                },
               }
             ]
      }
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Films',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: './js/[name].[hash].js',
    path: path.resolve(__dirname, '../build'),
  },
};
