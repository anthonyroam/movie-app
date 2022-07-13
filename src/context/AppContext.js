import React from 'react';
import useData from '../hooks/useData';

const AppContext = React.createContext({});

function AppProvider({ children }) {
  const data = useData();

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
