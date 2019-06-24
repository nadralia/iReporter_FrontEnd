const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'index.bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules'],
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|woff|woff2|eot|ttf|svg)$/i,
        use: [
          'file-loader'
        ]
      },
      {
         test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
         use: "file-loader?limit=10000&mimetype=application/octet-stream"
       }, {
         test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
         use: "file-loader"
       },
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../'),
    compress: true
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      title: "production"
    })
  ]
}