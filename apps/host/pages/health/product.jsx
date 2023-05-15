import dynamic from 'next/dynamic';
import Router from 'next/router';

const Products = dynamic(() => import('product/Products'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Products
      ></Products>
    </>
  );
}
