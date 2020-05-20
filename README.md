Arweave CDN Uploader Webpack Plugin
===

A webpack plugin to upload assets to Arweave permaweb

### Installation

Using npm:

```sh
npm install @arweave-cdn/webpack-plugin --save-dev 
```

or using yarn:

```sh
yarn add @arweave-cdn/webpack-plugin --dev
```

## Basic Usage

```js
const { ArweaveUploaderWebpackPlugin } = require('@arweave-cdn/webpack-plugin');

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
const { ArweaveUploaderWebpackPlugin } = require('@arweave-cdn/webpack-plugin');

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
