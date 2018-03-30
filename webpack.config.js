const webpack = require('webpack');
const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = {
  entry: {
    vendor: ['react','react-dom'],
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name].[chunkhash:6].js'
  },
  devServer: {
    inline: true,
    port: 8181
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'url-loader?limit=2048&name=images/[hash:8].[name].[ext]'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            ['import', { libraryName: 'antd-mobile', style: 'css' }] // `style: true` 会加载 less 文件
          ]
        },
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        // loader: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader?modules&localIdentName=[local]_[hash:base64:5]!less-loader"
        // }),
        loader: "style-loader!css-loader?modules&localIdentName=[local]_[hash:base64:5]!less-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: { loader: "css-loader", options: { minimize: true } } }),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].[chunkhash:6].css"),
    new CleanWebpackPlugin(
      ['dist'],
      {
        root: __dirname,
        verbose: true,
        dry: false
      }
    ),
    new webpack.optimize.CommonsChunkPlugin("vendor"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
      }
    })
  ],
};

// 获取指定路径下的入口文件
function getEntries(globPath) {
  const files = glob.sync(globPath),
    entries = {};
  files.forEach(function (filepath) {
    const split = filepath.split('/');
    const name = split[split.length - 2];
    entries[name] = './' + filepath;
    
  });
  return entries;
}

const entries = getEntries('src/*/index.js');

Object.keys(entries).forEach(function (name) {
  webpackConfig.entry[name] = entries[name];
  const plugin = new HtmlWebpackPlugin({
    filename: name + '.html',
    template: './public/index.html',
    inject: true,
    chunks: [name,'vendor']
  });
  webpackConfig.plugins.push(plugin);
});

module.exports = webpackConfig;