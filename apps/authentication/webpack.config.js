const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('../../package.json').dependencies;
const path = require('path')

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {

  config.optimization = {
    splitChunks: false
};

config.output =  {
  uniqueName: "authentication",
  publicPath: "auto",
  scriptType: 'text/javascript',
  path:path.join(__dirname, "../../dist/apps/authentication"),

}

    config.plugins.push(new ModuleFederationPlugin({
      name: 'authentication',
      filename: 'remoteEntry.js',
      // library: { type: 'var', name: 'demo' },
      exposes: {
        './Home': './src/App.js',
        './ProtectedRoute': './src/components/ProtectedRoute.js',
        './UserAuthContext':'./src/context/UserAuthContext.js'
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
        },
      ],
    }))
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  return config;
});
