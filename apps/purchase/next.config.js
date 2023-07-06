// //@ts-check

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { withNx } = require('./with-nx.js');

// /**
//  * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
//  **/
// const nextConfig = {
//   nx: {
//     // Set this to true if you would like to to use SVGR
//     // See: https://github.com/gregberge/svgr
//     svgr: false,
//   },
// };

// module.exports = withNx(nextConfig);


const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR

module.exports = {
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'purchase',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './index': './pages/index.tsx',
        },
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};
