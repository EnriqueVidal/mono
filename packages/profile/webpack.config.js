const generateConfig = require('webpack-config')
const path = require('path')

module.exports = generateConfig(
  path.resolve(__dirname, 'src/index.ts'),
  path.resolve(__dirname, 'dist')
)
