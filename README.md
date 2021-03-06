Arweave CDN Uploader Webpack Plugin
===

A webpack plugin to upload assets to Arweave permawe

### Installation

```sh
npm install @arweave-cdn/webpack-plugin --save-dev
```

## Basic Usage

```js
const ArweaveUploaderWebpackPlugin = require('@arweave-cdn/webpack-plugin');

const webpackConfig = {
    plugins: [
        new ArweaveUploaderWebpackPlugin({
            // walletKeyFilePath is required
            walletKeyFilePath: '/absolute/filepath/to/arweave-wallet-key-file.json',
        }),
    ],
};

module.exports = webpackConfig;
```

## Advanced Configuration

```js
const ArweaveUploaderWebpackPlugin = require('@arweave-cdn/webpack-plugin');

const webpackConfig = {
    plugins: [
        new ArweaveUploaderWebpackPlugin({
            walletKeyFilePath: '/absolute/filepath/to/arweave-wallet-key-file.json',
            indexFile: 'index.html',
            arweaveApiConfig: {
                host: 'arweave.net',
                port: 443,
                protocol: 'https',
                timeout: 20000,
                logging: false,
            }
        }),
    ],
};

module.exports = webpackConfig;
```

### Options

- `walletKeyFilePath`: File path to arweave wallet key file
- `indexFile`: Index file path (defaults to **index.html**)
- `arweaveApiConfig`: Arweave API config object to use for Arweave connection. Default to following values:
```
{
    host: 'arweave.net',// Hostname or IP address for a Arweave host
    port: 443,          // Port
    protocol: 'https',  // Network protocol http or https
    timeout: 20000,     // Network request timeouts in milliseconds
    logging: false,     // Enable network request logging
}
``` 

### Demo

![Webpack Plugin Demo](https://andrewabramov.s3.eu-central-1.amazonaws.com/output.gif)
