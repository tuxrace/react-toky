var webpack = require('webpack')
module.exports = {
  entry: './index.js',
  output: { filename: 'build.js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: 2
    })
  ],
  devtool: '#source-map'
}