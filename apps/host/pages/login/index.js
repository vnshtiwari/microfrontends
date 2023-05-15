import dynamic from 'next/dynamic';
import { lazy } from 'react';
import Nav from '../../components/Counter'
// import Underwriting from 'underwriting/App'
// const Underwriting = lazy(() => import('underwriting/App'));

// const Quote = dynamic(() => import('remote/Nav'), {
//   ssr: false,
//   //loading: () => <p>Loading...</p>
// });

const Login = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    return import('authentication/Home');
  },
  { suspense: true, ssr: false }
);


  export default function Products() {
    return (
      <Login/>
    );
  }