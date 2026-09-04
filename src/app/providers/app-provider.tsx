import "@mantine/core/styles.css";

import type { FC } from "react";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { HashRouter } from "react-router-dom";
import "@mantine/carousel/styles.css"

interface ProviderInterface {
  children: React.ReactNode;
}

export const AppProvider: FC<ProviderInterface> = ({ children }) => {
  return (
    <HashRouter>
      <MantineProvider>
        <ModalsProvider>{children}</ModalsProvider>
      </MantineProvider>
    </HashRouter>
  );
};
