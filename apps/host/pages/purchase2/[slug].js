import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router';

const Quote = dynamic(() => import('basicDetails/Quote'), {
  ssr: false,
});
const Product = dynamic(() => import('product/Products'), {
  ssr: false,
});
const Plan = dynamic(() => import('plans/Plan'), {
  ssr: false,
});
const Hospital = dynamic(() => import('hospital/Hospital'), {
  ssr: false,
});

const Underwriting = dynamic(() => import('underwriting/App'), {
  ssr: false,
});

const Proposal = dynamic(() => import('proposal/Proposal'), {
  ssr: false,
});

const Payment = dynamic(() => import('payment/App'), {
  ssr: false,
});

export default function Products() {
  let router = useRouter();

  return (
    <>
      {router.query.slug == 'basicdetails' && (
        <Quote
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase2/product',
              },
              '/purchase2/product'
            );
          }}
        ></Quote>
      )}
      {router.query.slug == 'product' && (
        <Product
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase2/product',
              },
              '/purchase2/product'
            );
          }}
        ></Product>
      )}
      {router.query.slug == 'plan' && (
        <Plan
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase2/payment',
              },
              '/purchase2/payment'
            );
          }}
        ></Plan>
      )}
      {router.query.slug == 'underwriting' && (
        <Underwriting
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase2/proposal',
              },
              '/purchase2/proposal'
            );
          }}
        ></Underwriting>
      )}
      {router.query.slug == 'proposal' && (
        <Proposal
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase/payment',
              },
              '/purchase/payment'
            );
          }}
        ></Proposal>
      )}

      {router.query.slug == 'payment' && (
        <Payment
          nextCallback={() => {
            Router.push(
              {
                pathname: '/purchase/underwriting',
              },
              '/purchase/underwriting'
            );
          }}
        ></Payment>
      )}
    </>
  );
}
