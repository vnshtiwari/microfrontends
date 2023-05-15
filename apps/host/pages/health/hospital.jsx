import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router';

const Hospital = dynamic(() => import('hospital/Hospital'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Hospital
      ></Hospital>
    </>
  );
}
