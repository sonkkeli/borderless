# Simple IWA borderless demo

Run `npm i` to install dependencies.

One can run the app locally with  
`npm run serve`

The app can also be packaged and signed into an Isolated Web App with either Rollup or Webpack by running: 

`npm run build:webpack` or  
`npm run build:rollup`

Note that you need to create an ed25519 private key first and put it into a file named `.env`.

If you just want to try out this app, run (note that this key is just for testing and no longer secure as it's exposed here):

```
echo 'ED25519KEY="-----BEGIN PRIVATE KEY-----\nMC4CAQAwBQYDK2VwBCIEIG1aEeaFojg4jAGYKyVthb1f2jzYuhPgY83SSCiTOnUX\n-----END PRIVATE KEY-----"' > .env
```

Note that you must have the line breaks with `\n`s in place in the `.env` `ED25519KEY` variable.

Flags to enable when running on chrome:

chrome://flags#enable-desktop-pwas-borderless (Linux/ChromeOS only)   
chrome://flags#enable-isolated-web-apps   
chrome://flags#enable-isolated-web-app-dev-mode   
Path of your Isolated Web App file chrome://flags#install-isolated-web-app-from-file   