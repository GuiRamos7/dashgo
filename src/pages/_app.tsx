import { ChakraProvider } from '@chakra-ui/react';
import { SidebarDrawerProvider } from 'contexts/SidebarDrawerContext';
import { theme } from 'styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <SidebarDrawerProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SidebarDrawerProvider>
  );
}

export default MyApp;
