import dynamic from 'next/dynamic';
import React from 'react';

const Main = dynamic(
  () => {
    return import('home/Main');
  },
  { ssr: true }
);


export default function Products() {
  return (
          <Main />
  );
}
