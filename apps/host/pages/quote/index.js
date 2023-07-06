// const OtherComponent = lazy(() => import('remote/Nav'));
// const Counter = lazy(() => import('../../Components/Counter'));
// import Nav from 'remote/Nav'
import React, { useState } from 'react';

import dynamic from 'next/dynamic';

// const Quote = dynamic(() => import('remote/Nav'), {
//   ssr: false,
//   //loading: () => <p>Loading...</p>
// });

const Content = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    return import('remote1/Content');
  },
  { ssr: true }
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

// const Quote = dynamic(
//   () => {
//     // @ts-expect-error TODO: support types for importing MF
//     return import('remote/Nav');
//   },
//   { suspense: true }
// );

// const Quote = lazy(() => import('remote/Mod'))

export default function Products() {
  let [a, setA] = useState(0);
  return (
    <>
      <Content></Content>
    </>
  );
}
