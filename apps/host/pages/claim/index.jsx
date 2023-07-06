import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router';
const ProtectedRoute = dynamic(
  () => import('authentication/ProtectedRoute').then((mod) => mod),
  { ssr: false }
);

const UserAuthContextProvider = dynamic(
  () =>
    import('authentication/UserAuthContext').then(
      (mod) => mod.UserAuthContextProvider
    ),
  { ssr: false }
);

const Claims = dynamic(() => import('claim/Claims'), {
  ssr: false,
});

export default function Index() {
  return (
    <UserAuthContextProvider>
      <ProtectedRoute>
        <Claims></Claims>{' '}
      </ProtectedRoute>
    </UserAuthContextProvider>
  );
}
