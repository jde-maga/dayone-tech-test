import { createContext, useState } from "react";
import { Filter } from "../types/Filter";

export const defaultFilters: Filter = {
  types: [],
  isDone: undefined,
  orderBy: undefined,
};

export const FiltersContext = createContext<{
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
}>({
  filters: defaultFilters,
  setFilters: () => {},
});

type Props = {
  children: React.ReactNode;
};

const FiltersProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState(defaultFilters);
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
