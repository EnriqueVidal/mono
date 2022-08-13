const TypescriptDeclarationWebpackPlugin = require('typescript-declaration-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const devMode = process.env.NODE_ENV !== 'production'

module.exports = function (entry, output) {
  return {
    mode: devMode ? 'development' : 'production',
    devtool: 'source-map',
    entry: entry,
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.ts', '.tsx'],
    },
    output: {
      path: output,
      filename: 'main.js',
      libraryTarget: 'commonjs',
    },
    externals: [nodeExternals()],
    plugins: [
      new TypescriptDeclarationWebpackPlugin({
        out: 'types.d.ts',
      }),
    ],
  }
}
