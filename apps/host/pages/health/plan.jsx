import dynamic from 'next/dynamic';
import Router from 'next/router';

const Plan = dynamic(() => import('plans/Plan'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Plan nextCallback={() => {
          Router.push(
            {
              pathname: '/health/proposal',
            },
            '/health/proposal'
          );
        }}
      ></Plan>
    </>
  );
}
