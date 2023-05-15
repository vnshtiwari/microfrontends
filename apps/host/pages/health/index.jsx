import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router';

const Quote = dynamic(() => import('basicDetails/Quote'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Quote
        nextCallback={() => {
          Router.push(
            {
              pathname: '/health/product',
            },
            '/health/product'
          );
        }}
      ></Quote>
    </>
  );
}
