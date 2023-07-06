const NextFederationPlugin = require('@module-federation/nextjs-mf');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  process.env.PRODUCTION = false;

  const headerHost = process.env.PRODUCTION
    ? 'https://next-mf-header.vercel.app'
    : 'http://localhost:4201';
  const plpHost = process.env.PRODUCTION
    ? 'https://next-mf-plp.vercel.app'
    : 'http://localhost:4300';
  const purchaseHost = process.env.PRODUCTION
    ? 'http://localhost:4301'
    : 'http://localhost:4301';

  const quoteHost = process.env.PRODUCTION
    ? 'http://localhost:4302'
    : 'http://localhost:4302';

  const remoteHost = process.env.PRODUCTION
    ? 'http://localhost:8081'
    : 'http://localhost:8081';

  const remote1Host = !isServer
    ? 'http://localhost:3001/client/'
    : 'http://localhost:3001/server/';

  const productsHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/product'
    : 'http://localhost:4303';
  const demoHost = 'http://localhost:4305';
  const underwritingHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/underwriting'
    : 'http://localhost:4508';
  const basicDetailsHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/basicDetail'
    : 'http://localhost:4501';
  const plansHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/plans'
    : 'http://localhost:4502';
  const personalisedQuoteHost = 'http://localhost:4503';
  const proposalHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/proposal'
    : 'http://localhost:4504';
  const ekycHost = 'http://localhost:4506';
  const paymentHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/payment'
    : 'http://localhost:4507';
  const homeHost = 'http://localhost:4205';
  const ratingtHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/rating'
    : 'http://localhost:4601';
  const feedbackHost = 'http://localhost:4602';
  const productHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/product'
    : 'http://localhost:4603';
  const userHost = 'http://localhost:4604';
  const authenticationHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/authentication'
    : 'http://localhost:4605';
  const hosptialHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/hospital'
    : 'http://localhost:4801';
  const claimHost = process.env.PRODUCTION
    ? 'https://storage.googleapis.com/customerapp/claims'
    : 'http://localhost:4802';

  return {
    header: `header@${headerHost}/_next/static/${location}/remoteEntry.js`,
    plp: `plp@${plpHost}/_next/static/${location}/remoteEntry.js`,
    purchase: `purchase@${purchaseHost}/_next/static/${location}/remoteEntry.js`,
    home: `home@${homeHost}/_next/static/${location}/remoteEntry.js`,
    quote: `quote@${quoteHost}/remoteEntry.js`,
    remote: `remote@${remoteHost}/remoteEntry.js`,
    products: `products@${productsHost}/remoteEntry.js`,
    demo: `demo@${demoHost}/remoteEntry.js`,
    underwriting: `underwriting@${underwritingHost}/remoteEntry.js`,
    basicDetails: `basicDetails@${basicDetailsHost}/remoteEntry.js`,
    plans: `plans@${plansHost}/remoteEntry.js`,
    personalisedQuote: `personalisedQuote@${personalisedQuoteHost}/remoteEntry.js`,
    proposal: `proposal@${proposalHost}/remoteEntry.js`,
    ekyc: `ekyc@${ekycHost}/remoteEntry.js`,
    payment: `payment@${paymentHost}/remoteEntry.js`,
    product: `product@${productHost}/remoteEntry.js`,
    authentication: `authentication@${authenticationHost}/remoteEntry.js`,
    user: `user@${userHost}/remoteEntry.js`,
    claim: `claim@${claimHost}/remoteEntry.js`,
    hospital: `hospital@${hosptialHost}/remoteEntry.js`,
    rating: `rating@${ratingtHost}/remoteEntry.js`,
    feedback: `feedback@${feedbackHost}/remoteEntry.js`,
    remote1: `remote1@${remote1Host}/remoteEntry.js`,
  };
};
module.exports = {
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        },
      })
    );
    return config;
  },
};
