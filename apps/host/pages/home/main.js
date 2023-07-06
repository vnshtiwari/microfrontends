import dynamic from 'next/dynamic';
import { Suspense } from 'react';
// import Nav from 'demo/Nav'

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
    return import('home/Main');
  },
  { suspense: false }
);

const Nav = dynamic(() => import('demo/Nav'), {
  ssr: false,
});

export default function Products() {
  return (
    <>
      <Plp />
    </>
  );
}
