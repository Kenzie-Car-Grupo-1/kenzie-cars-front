import { createContext, ReactNode, useContext, useState } from "react";

interface IModalContext {
  openModalImageCar: boolean;
  setOpenModalImageCar: React.Dispatch<React.SetStateAction<boolean>>;
  imgForModal: string;
  setImgForModal: React.Dispatch<React.SetStateAction<string>>;
  openModalCreateAd: boolean;
  setOpenModalCreateAd: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalProps {
  children: ReactNode;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IModalProps) => {
  const [openModalImageCar, setOpenModalImageCar] = useState(false);
  const [imgForModal, setImgForModal] = useState("");
  const [openModalCreateAd, setOpenModalCreateAd] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModalImageCar,
        setOpenModalImageCar,
        imgForModal,
        setImgForModal,
        openModalCreateAd,
        setOpenModalCreateAd,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
