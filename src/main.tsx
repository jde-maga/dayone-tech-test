import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ApolloProvider from "./providers/ApolloProvider.tsx";
import RouterProvider from "./providers/RouterProvider.tsx";
import FiltersProvider from "./providers/FiltersProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider>
      <FiltersProvider>
        <RouterProvider />
      </FiltersProvider>
    </ApolloProvider>
  </StrictMode>
);
