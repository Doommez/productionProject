import webpack from 'webpack';
import { BuildOptions } from './type/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';

function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const swgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const cssLoader = buildCssLoaders(options);

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
