import webpack from "webpack";
import { BuildOptions } from "./type/config";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";

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
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: "inline-source-map",
  };
}

export default buildWebpackConfig;
