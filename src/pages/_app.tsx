import React from "react";

import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.layout ? Component.layout : React.Fragment;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
