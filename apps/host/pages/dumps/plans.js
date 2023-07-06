import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router';

const Plans = dynamic(() => import('plans/App'), {
  ssr: false,
});

export default function Products() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Plans planList={[]} state={{}}></Plans>
    </>
  );
}
