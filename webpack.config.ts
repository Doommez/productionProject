import path from 'path';
import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/type/config';

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src')
};

export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    });
    return config;
};
