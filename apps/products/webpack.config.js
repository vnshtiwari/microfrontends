const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');
const { withModuleFederation } = require('@nrwl/react/module-federation');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('../../package.json').dependencies;



const { merge } = require('webpack-merge');


const baseConfig = require('./module-federation.config');

const config = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  (config) => {
    // Further customize webpack config
    config.output = {
      uniqueName: "products",
      publicPath: "auto",
      scriptType: 'text/javascript'
    }
    return config;
  });
