import dynamic from 'next/dynamic';
import { Suspense } from 'react'; 

const useUserAuth = dynamic(
  () =>
    import('authentication/UserAuthContext').then(
      (mod) => mod.useUserAuth
    ),
  { ssr: false }
);


const Header = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    return import('header/index');
  },
  { ssr: true }
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
  const { user } = useUserAuth();

    return (
      <>
      <Header user={user}></Header>
      <Plp/>
      </>
    );
  }