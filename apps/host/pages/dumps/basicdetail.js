import dynamic from 'next/dynamic';
import Router from 'next/router';

const BasicDetails = dynamic(() => import('basicDetails/App'), {
  ssr: false,
});

export default function Products() {
  return (
    <>
      <BasicDetails
        nextCallback={(basicDetails) => {
          Router.push(
            {
              pathname: '/purchase/plans',
              query: { data: JSON.stringify(basicDetails) },
            },
            '/purchase/plans'
          );
        }}
      ></BasicDetails>
    </>
  );
}
