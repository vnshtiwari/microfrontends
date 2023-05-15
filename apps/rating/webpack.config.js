const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('../../package.json').dependencies;

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.optimization = {
    splitChunks: false
};

config.output =  {
  uniqueName: "rating",
  publicPath: "auto",
  scriptType: 'text/javascript'
}

    config.plugins.push(new ModuleFederationPlugin({
      name: 'rating',
      filename: 'remoteEntry.js',
      // library: { type: 'var', name: 'demo' },
      exposes: {
        './Rating': './src/app/rating',
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
