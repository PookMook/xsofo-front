import React from 'react';
import { globalStyles } from '@xsofo/design-system';
import type { AppProps } from 'next/app';

const App = function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
};

export default App;
