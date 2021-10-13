const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('webpack-dev-server');

module.exports = (env, { mode }) => {
  const isProductionMode = mode === 'production';

  return {
    mode,
    devtool: !isProductionMode ? 'cheap-module-source-map' : false,
    bail: isProductionMode,
    entry: path.resolve(__dirname, 'src/index'),
    output: {
      path: path.resolve(__dirname, 'dist/static/js'),
      filename: isProductionMode ? '[name].[contenthash:8].js' : 'bundle.js',
      chunkFilename: isProductionMode ? '[name].[contenthash:8].chunk.js' : '[name].chunk.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.css$/,
          use: [
            isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]_[local]--[hash:8]',
                },
              },
            },
            'postcss-loader',
          ],
        },
        {
          loader: 'file-loader',
          exclude: [/\.(js|jsx|ts|tsx|css)$/, /\.html$/, /\.json$/, /\.(gif|jpe?g|png)$/],
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),

      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve(__dirname, 'public/index.html'),
        ...(isProductionMode
          ? {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          : undefined),
      }),
    ],
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@views': path.resolve(__dirname, 'src/views'),
      },
      modules: [path.resolve(__dirname, 'node_modules')],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    devServer: {
      host: env.CLIENT_HOST,
      port: env.CLIENT_PORT,
      open: true,
    },
  };
};
