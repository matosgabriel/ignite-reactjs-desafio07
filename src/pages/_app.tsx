import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <>
          <Head>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          {/* <ReactQueryDevtools /> */}
        </>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
