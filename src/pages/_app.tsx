import { ChakraProvider } from '@chakra-ui/react';
import { SidebarDrawerProvider } from 'contexts/SidebarDrawerContext';
import { makeServer } from 'services/mirage';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from 'styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { queryClient } from 'services/queryClient';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
