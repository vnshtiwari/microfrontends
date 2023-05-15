const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR

module.exports = {
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './index': './pages/index.tsx',
          './Main': './pages/HomeMainPage.js',
          './PurposeDetail': './pages/PurposeDetail.js',

        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
