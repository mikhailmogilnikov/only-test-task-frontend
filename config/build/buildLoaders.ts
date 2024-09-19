import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ModuleOptions } from 'webpack';

import { BuildOptions } from './types/build.types';
import { buildBabelLoader } from './babel/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  const { mode } = options;

  const isDev = mode === 'development';

  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'autoprefixer',
            {
              // Options
            },
          ],
        ],
      },
    },
  };

  // Для поддержки CSS-modules
  const cssLoaderWithModule = {
    loader: 'css-loader',
    options: {
      modules: {
        namedExport: false,
        exportLocalsConvention: 'as-is',
        localIdentName: isDev ? '[path][name]_[local]' : '[hash:base64:8]',
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModule,
      postCssLoader,
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const babelLoader = buildBabelLoader(options);

  // Для поддержки ассетов
  const assetsLoader = {
    test: /\.((jpe?g|png|gif|woff|woff2|eot|ttf))$/i,
    type: 'asset/resource',
  };

  // Для преобразования svg в React-компоненты
  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [{ name: 'convertColors', params: { currentColor: true } }],
          },
        },
      },
    ],
  };

  return [scssLoader, assetsLoader, babelLoader, svgrLoader];
};
