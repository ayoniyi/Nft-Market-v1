import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="smContainer">
        <p>
          Sorry you can&apos;t view app on this device, please switch to a
          larger device.
        </p>
      </div>
      <div className="mainContainer">
        <ThirdwebProvider activeChain={activeChain}>
          <ChakraProvider>
            <Navbar />
            <Component {...pageProps} />
          </ChakraProvider>
        </ThirdwebProvider>
      </div>
    </>
  );
}

export default MyApp;
