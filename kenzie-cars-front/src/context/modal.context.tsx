import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IModalContext {
  openModalImageCar: boolean;
  setOpenModalImageCar: React.Dispatch<React.SetStateAction<boolean>>;
  imgForModal: string;
  setImgForModal: React.Dispatch<React.SetStateAction<string>>;
  openModalCreateAd: boolean;
  setOpenModalCreateAd: React.Dispatch<React.SetStateAction<boolean>>;
  openModalSucess: boolean;
  setOpenModalSucess: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalProps {
  children: ReactNode;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

export const ModalProvider = ({ children }: IModalProps) => {
  const [openModalImageCar, setOpenModalImageCar] = useState(false);
  const [imgForModal, setImgForModal] = useState("");
  const [openModalCreateAd, setOpenModalCreateAd] = useState(false);
  const [openModalSucess, setOpenModalSucess] = useState(false);

  useEffect(() => {
    if (openModalCreateAd) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModalCreateAd]);

  return (
    <ModalContext.Provider
      value={{
        openModalImageCar,
        setOpenModalImageCar,
        imgForModal,
        setImgForModal,
        openModalCreateAd,
        setOpenModalCreateAd,
        openModalSucess,
        setOpenModalSucess,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
