'use client';
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext<{
  keyword: string;
  setKeyword: (value: string) => void;
}>({
  keyword: '',
  setKeyword: () => {},
});

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [keyword, setKeyword] = useState('');

  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}