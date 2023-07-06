import dynamic from 'next/dynamic';
import Router from 'next/router';

const Proposal = dynamic(() => import('proposal/Proposal'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
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
    </>
  );
}
