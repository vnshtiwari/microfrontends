import dynamic from 'next/dynamic';
const ProtectedRoute = dynamic(
  () => import('authentication/ProtectedRoute').then((mod) => mod),
  { ssr: false }
);
const useUserAuth = dynamic(
  () =>
    import('authentication/UserAuthContext').then(
      (mod) => mod.useUserAuth
    ),
  { ssr: false }
);

const UserAuthContextProvider = dynamic(
  () =>
    import('authentication/UserAuthContext').then(
      (mod) => mod.UserAuthContextProvider
    ),
  { ssr: false }
);





const User = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    return import('user/User');
  },
  { ssr: false }
);


export default function Products() {
  // const { user } = useUserAuth();
  // console.log(user)

  return (
    <UserAuthContextProvider>
        <ProtectedRoute>
          <User />
        </ProtectedRoute>
    </UserAuthContextProvider>
  );
}
