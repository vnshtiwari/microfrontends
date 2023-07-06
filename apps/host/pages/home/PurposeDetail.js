import dynamic from 'next/dynamic';

// import Nav from 'demo/Nav'

const PurposeDetail = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    return import('home/PurposeDetail');
  },
  { suspense: true }
);
// const PurposeDetail = dynamic(
//   () => import('home/PurposeDetail').then((mod) => mod.PurposeDetail),
//   {
//     ssr: true,
//   }
// );

export default function Products(props) {
  console.log('properties-----', props);
  return (
    <>
      <PurposeDetail repo={props.repo} />
    </>
  );
}

export async function getServerSideProps(context) {
  const page = await import('home/PurposeDetail');

  if (page.getServerSideProps) {
    let res = await page.getServerSideProps(context);

    return { props: res.props };
  }

  return {
    props: {},
  };
}
