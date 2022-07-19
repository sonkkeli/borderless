import webbundle from 'rollup-plugin-webbundle';
import * as wbnSign from 'wbn-sign';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [
    webbundle({
      baseURL: new wbnSign.WebBundleId(
        wbnSign.parsePemKey(process.env.ED25519KEY)
      ).serializeWithIsolatedWebAppOrigin(),
      static: { dir: 'src' },
      output: 'rollup.swbn',
      integrityBlockSign: {
        key: process.env.ED25519KEY,
      },
    }),
  ],
};

/**
 * Sidenote: The file must be named with .mjs extension. Otherwise it will throw below error:
 * [!] Error: While loading the Rollup configuration from "rollup.config.js",
 * Node tried to require an ES module from a CommonJS file, which is not supported.
 * A common cause is if there is a package.json file with "type": "module" in the same folder.
 * You can try to fix this by changing the extension of your configuration file to
 * ".cjs" or ".mjs" depending on the content, which will prevent Rollup from trying to
 * preprocess the file but rather hand it to Node directly.
 *
 * Also node v.12 doesnt support modules, so 13+ only works.
 */
