import {resolve} from 'path';
import {Configuration} from 'webpack';
import 'webpack-dev-server';

const clientConfig = (env): Configuration => {
  console.log(env)
  const isProductionMode = false;

  return {
    mode: 'development',
    bail: isProductionMode,
    entry: resolve(__dirname, 'src/index'),
    output: {
      path: resolve(__dirname, 'dist/static/js'),
      filename:
          isProductionMode
              ? '[name].[contenthash:8].js'
              : 'bundle.js',
      chunkFilename:
          isProductionMode
              ? '[name].[contenthash:8].chunk.js'
              : '[name].chunk.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: '/node_modules/',
        },
      ]
    },
    resolve: {
      alias: {
        '@components': resolve(__dirname, 'src/components'),
        '@store': resolve(__dirname, 'src/store'),
        '@views': resolve(__dirname, 'src/views'),
      },
      modules: [resolve(__dirname, 'node_modules')],
      extensions: ['.ts', '.tsx', '.css'],
    },
    devServer: {
      host: env.CLIENT_HOST,
      port: env.CLIENT_PORT,
    },
  }
};

export default clientConfig;