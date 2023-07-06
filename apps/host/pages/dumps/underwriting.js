import dynamic from 'next/dynamic';

const Underwriting = dynamic(() => import('underwriting/App'), {
  ssr: false,
});

export default function Products() {
  return (
    <>
      <Underwriting></Underwriting>
    </>
  );
}
