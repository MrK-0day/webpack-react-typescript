const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    hot: true,
    port: 6969
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Dev
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  mode: 'development',
  // Build
  // optimization: {
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  // mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: ['sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
}