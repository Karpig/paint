const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('webpack-dev-server');

module.exports = (env, { mode }) => {
  const isProductionMode = false;

  return {
    mode,
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
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: '/node_modules/',
        },
      ],
    },
    plugins: [
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
