import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { globalStyles } from '@xsofo/design-system';
import type { AppProps } from 'next/app';

const App = function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });
  globalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
