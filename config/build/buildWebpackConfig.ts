import webpack from "webpack";
import { BuildOptions } from "./type/config";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildDevServer from "./buildDevServer";
import buildPlugins from "./buildPlugins";

function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name][contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: options.isDev ? "inline-source-map" : undefined,
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
}

export default buildWebpackConfig;
