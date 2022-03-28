const MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CssMinimizerPlugin = require('css-minimizer-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
  return {
    mode: 'production',
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
    optimization: {
      minimizer: [new TerserPlugin({}), new CssMinimizerPlugin()],
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: {
        name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
      },
    },
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
      hints: false,
    },
  };
};
