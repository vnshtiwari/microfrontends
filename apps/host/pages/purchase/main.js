import dynamic from 'next/dynamic';
import { lazy } from 'react';
import Nav from '../../components/Counter'
import Underwriting from 'underwriting/App'
// const Underwriting = lazy(() => import('underwriting/App'));

// const Quote = dynamic(() => import('remote/Nav'), {
//   ssr: false,
//   //loading: () => <p>Loading...</p>
// });

const Header = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    return import('header/index');
  },
  { suspense: true, ssr: false }
);



// const Underwriting = dynamic(() => import('underwriting/App'),  {  suspense: true , ssr: true });

  // const Quote = dynamic(
  //   () => {
  //     // @ts-expect-error TODO: support types for importing MF
  //     return import('quote/Claims');
  //   },
  //   { suspense: false }
  // );
//   const TerminalComponent = dynamic(() => import('<path-to>/components/terminal-component'), {
//     ssr: false
// })
  // const Quote = dynamic(
  //   () => import('remote/Mod').then((mod) => mod.Mod),
  //   {
  //     ssr: true,
  //   }
  // );

//   const Claims = dynamic(() => import('remote/Nav'), {
//   ssr: false,
// });



// const Quote = dynamic(
//   () => {va
//     // @ts-expect-error TODO: support types for importing MF
//     return import('remote/Nav');
//   },
//   { suspense: true }
// );




  // const Quote = lazy(() => import('remote/Mod'))


  export default function Products() {
    return (
      <Underwriting/>
    );
  }