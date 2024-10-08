import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './type/config';

function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true
  };
}

export default buildDevServer;
