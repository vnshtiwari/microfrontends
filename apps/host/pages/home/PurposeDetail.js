import dynamic from 'next/dynamic';
import { Suspense } from 'react'; 
// import Nav from 'demo/Nav'




const PurposeDetail = dynamic(
    () => {
      // @ts-expect-error TODO: support types for importing MF
      return import('home/PurposeDetail');
    },
    { suspense: true }
  );



  export default function Products() {
    return (
      <>
      <PurposeDetail/>
      </>
    );
  }