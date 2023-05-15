import dynamic from 'next/dynamic';
import { lazy } from 'react'; 

// const OtherComponent = lazy(() => import('remote/Nav'));
// const Counter = lazy(() => import('../../Components/Counter'));
// import Nav from 'remote/Nav'





// const Quote = dynamic(() => import('remote/Nav'), {
//   ssr: false,
//   //loading: () => <p>Loading...</p>
// });

const Header = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    return import('header/index');
  },
  { suspense: true }
);


const Plp = dynamic(
    () => {
      // @ts-expect-error TODO: support types for importing MF
      return import('purchase/index');
    },
    { suspense: true }
  );

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

  const Claims = dynamic(() => import('products/Nav'), {
  ssr: false
});



// const Quote = dynamic(
//   () => {
//     // @ts-expect-error TODO: support types for importing MF
//     return import('remote/Nav');
//   },
//   { suspense: true }
// );




  // const Quote = lazy(() => import('remote/Mod'))


  export default function Products() {
    return (
      <>
      <Claims></Claims>
      </>
    );
  }