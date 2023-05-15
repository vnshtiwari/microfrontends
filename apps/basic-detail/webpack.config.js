const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('../../package.json').dependencies;
var path = require('path');
const { merge } = require('webpack-merge');


// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.optimization = {
    splitChunks: false
};

config.output =  {
  uniqueName: "basicDetail",
  publicPath: "auto",
  path:path.join(__dirname, "../../dist/apps/basicDetail"),
  scriptType: 'text/javascript'
}

    config.plugins.push(new ModuleFederationPlugin({
      name: 'basicDetails',
      filename: 'remoteEntry.js',
      // library: { type: 'var', name: 'demo' },
      exposes: {
        './App': './src/app/BasicDetails',
        './Quote': './src/app/quote',

      },
      shared: [
        {
          ...deps,
          'react': {
            singleton: true,
            requiredVersion: deps.react,

          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },

          "@mui/material": {
            singleton: true,
            requiredVersion: deps["@mui/material"],
          }
        },
      ],
    }))
  return   merge(config, {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
              },
            },
          ],
        },
      ],
    },
  });
});
