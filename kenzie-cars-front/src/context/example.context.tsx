import { createContext, ReactNode, useContext } from "react";

interface IExempleContext {}

interface IExempleProps {
  children: ReactNode;
}

const ExempleContext = createContext<IExempleContext>({} as IExempleContext);

export const ExempleProvider = ({ children }: IExempleProps) => {
  return (
    <ExempleContext.Provider value={{}}>{children}</ExempleContext.Provider>
  );
};

export const useExemple = () => useContext(ExempleContext);
