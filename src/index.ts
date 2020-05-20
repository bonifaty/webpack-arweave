import { ArweaveApiConfig, ArweaveUploader } from '@arweave-cdn/uploader';
import { Compiler } from 'webpack';

type WebpackAsset = {
    existsAt: string;
};

type ArweavePluginOptions = {
    walletKeyFilePath: string;
    arweaveApiConfig?: Partial<ArweaveApiConfig>;
    indexFile?: string;
};

class ArweaveUploaderWebpackPlugin {
    private readonly options: ArweavePluginOptions;

    constructor (options: ArweavePluginOptions) {
        this.options = {
            indexFile: 'index.html',
            ...options,
        };
    }

    apply(compiler: Compiler) {
        compiler.hooks.afterEmit.tap('ArweaveUploaderWebpackPlugin', async (compilation) => {
            const assets: string[] = [];
            for (const assetName in compilation.assets) {
                const asset: WebpackAsset = compilation.assets[assetName];
                assets.push(asset.existsAt);
            }

            const arweaveUploader = new ArweaveUploader();

            const { walletKeyFilePath, arweaveApiConfig, indexFile } = this.options;

            await arweaveUploader.init(walletKeyFilePath, arweaveApiConfig);
            await arweaveUploader.uploadAssets(assets, compilation.outputOptions.path, indexFile);
        });
    }
}

module.exports = ArweaveUploaderWebpackPlugin;
