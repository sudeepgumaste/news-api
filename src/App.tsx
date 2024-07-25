import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pages from './routes'

import useLogMemoryUsage from './hooks/use-log-memory-usage';

import './App.css'

const queryClient = new QueryClient();

function App() {
  useLogMemoryUsage();
  return (
    <QueryClientProvider client={queryClient}>
      <Pages />
    </QueryClientProvider>
    
  )
}

export default App
