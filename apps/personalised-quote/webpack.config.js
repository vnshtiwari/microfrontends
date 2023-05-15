const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('../../package.json').dependencies;

// Nx plugins for webpack.
// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.optimization = {
    splitChunks: false
};

config.output =  {
  uniqueName: "personalisedQuote",
  publicPath: "auto",
  scriptType: 'text/javascript'
}

    config.plugins.push(new ModuleFederationPlugin({
      name: 'personalisedQuote',
      filename: 'remoteEntry.js',
      // library: { type: 'var', name: 'demo' },
      exposes: {
        './App': './src/app/PersonalisedQuote',
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
  return config;
});