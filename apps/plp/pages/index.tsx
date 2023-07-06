import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PlPList from '../components/pl-plist/pl-plist';

const queryClient = new QueryClient();
export function Index({ message }) {
  return (
    <QueryClientProvider client={queryClient}>
      {message}
      hi4
      <PlPList />
    </QueryClientProvider>
  );
}

export default Index;
