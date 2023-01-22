import { createRoot } from "react-dom/client";
import { SearchParams } from "./SearchParams";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Link,
} from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdpotedPetContes";
import { useState } from "react";

import Pet from "./Pet";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPets = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPets}>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
      
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
