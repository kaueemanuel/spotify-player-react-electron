import React, { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

export interface IContextData {
  token: any;
  user: any;
}

export interface IContext {
  context: IContextData;
  setContext: React.Dispatch<React.SetStateAction<IContextData>>;
}

const ContextInicalDataValues = {
  token: undefined,
  user: undefined,
};

export const ContextInicalValues: IContext = {
  context: ContextInicalDataValues,
  setContext: () => null,
};

export const Context: React.Context<IContext> =
  createContext(ContextInicalValues);

interface ContextProviderProps {
  children: React.ReactNode;
}
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const sessionContext = getLocalStorage('context');
  const inicialData = { ...sessionContext } || ContextInicalValues;
  const [context, setContext] = useState<IContextData>(inicialData);

  useEffect(() => {
    setLocalStorage('context', context);
  }, [context]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <Context.Provider value={{ context, setContext }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
