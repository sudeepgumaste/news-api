import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pages from './routes'

import './App.css'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Pages />
    </QueryClientProvider>
    
  )
}

export default App
