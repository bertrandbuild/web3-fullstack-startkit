"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygon],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <WagmiConfig config={config}>
      <ThemeProvider {...props}>{children}</ThemeProvider>
    </WagmiConfig>
  );
}