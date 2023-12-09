import React, { createContext, useState, useEffect, useMemo } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

export interface IContextData {
  credentials: any;
  user: any;
  playbackState: any;
}

export interface IContext {
  context: IContextData;
  setContext: React.Dispatch<React.SetStateAction<IContextData>>;
}

const ContextInicalDataValues = {
  credentials: undefined,
  user: undefined,
  playbackState: undefined,
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

  const contextMemo = useMemo(
    () => ({ context, setContext }),
    [context, setContext]
  );

  return <Context.Provider value={contextMemo}>{children}</Context.Provider>;
};

export default ContextProvider;
