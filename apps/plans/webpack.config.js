const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const deps = require('../../package.json').dependencies;
const path = require('path');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.optimization = {
    splitChunks: false,
  };

  config.output = {
    uniqueName: 'plans',
    publicPath: 'auto',
    scriptType: 'text/javascript',
    path: path.join(__dirname, '../../dist/apps/plans'),
  };

  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'plans',
      filename: 'remoteEntry.js',
      // library: { type: 'var', name: 'demo' },
      exposes: {
        './App': './src/app/Plans',
        './Plan': './src/app/Plan',
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },

          '@mui/material': {
            singleton: true,
            requiredVersion: deps['@mui/material'],
          },
        },
      ],
    })
  );
  return config;
});
