import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './type/config';

function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const swgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.scss'),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            'sass-loader'
        ]
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                            /// plugins
                        }
                    ]
                ]
            }
        }
    };

    return [fileLoader, swgLoader, babelLoader, typescriptLoader, cssLoader];
}

export default buildLoaders;
