import dynamic from 'next/dynamic';

const Hospital = dynamic(() => import('hospital/Hospital'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Hospital></Hospital>
    </>
  );
}
