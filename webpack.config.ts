import path from "path";
import webpack from "webpack";
import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { BuildPath } from "./config/build/type/config";

const paths: BuildPath = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
  build: path.resolve(__dirname, "build"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode: mode,
  paths: paths,
  isDev: isDev,
});

export default config;
