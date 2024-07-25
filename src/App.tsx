import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pages from './routes'

import useLogMemoryUsage from './hooks/use-log-memory-usage';

import './App.css'
import { reportWebVitals } from './report-web-vitals';

const queryClient = new QueryClient();

function App() {
  useLogMemoryUsage();
  return (
    <QueryClientProvider client={queryClient}>
      <Pages />
    </QueryClientProvider>
    
  )
}
reportWebVitals(console.log);
export default App
