const path = require('path');

const SRC_DIR = path.join(__dirname, '/src');
const OUT_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: path.resolve(OUT_DIR),
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
  mode: 'production',
  devtool: 'source-map',
};