import webpack from 'webpack';
import { BuildPath } from '../build/type/config';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { WebpackDefinePlugin } from '@storybook/builder-webpack5';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules = config.module.rules.map((rule: any) => {
        if (/svg/.test(rule.test)) {
            return {
                ...rule,
                exclude: /\.svg$/i
            };
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    });

    config.module.rules.push(buildCssLoaders({
        isDev: true,
        mode: 'production',
        paths: undefined,
        port: 0
    }));

    config.plugins.push( new WebpackDefinePlugin({
        __IS_DEV: true,
    }))
    return config;
}
