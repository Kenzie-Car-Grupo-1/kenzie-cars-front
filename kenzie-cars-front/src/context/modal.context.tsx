import { createContext, ReactNode, useContext, useState } from "react";

interface IModalContext {
  openModalImageCar: boolean;
  setOpenModalImageCar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalProps {
  children: ReactNode;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IModalProps) => {
  const [openModalImageCar, setOpenModalImageCar] = useState(true);

  return (
    <ModalContext.Provider value={{ openModalImageCar, setOpenModalImageCar }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
