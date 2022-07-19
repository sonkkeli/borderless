const WebBundlePlugin = require('webbundle-webpack-plugin');
const { WebBundleId, parsePemKey } = require('wbn-sign');
const path = require('path');
require('dotenv').config({ path: '.env' }); 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WebBundlePlugin({
      baseURL: new WebBundleId(
        parsePemKey(process.env.ED25519KEY)
      ).serializeWithIsolatedWebAppOrigin(),
      static: { dir: path.resolve(__dirname, 'src') },
      output: 'webpack.swbn',
      integrityBlockSign: {
        key: process.env.ED25519KEY,
      },
    }),
  ],
};
