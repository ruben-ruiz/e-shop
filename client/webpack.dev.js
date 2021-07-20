const path = require('path');

const SRC_DIR = path.join(__dirname, '/src');
const OUT_DIR = path.join(__dirname, '/dist');
const PUB_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PUB_DIR,
    port: 9000
  }
};