import { createContext, ReactNode, useContext, useState } from "react";
import { BaseURL } from "../service/axios";

interface ICarsContext {
  RequestCarByID: (id: string) => Promise<void>;
  setCarId: React.Dispatch<React.SetStateAction<string>>;
  car: ICar;
}

interface ICarsProps {
  children: ReactNode;
}

interface ICar {
  id: string;
  brand: string;
  color: string;
  description: string;
  fuel_type: string;
  images: IImage[];
  kms: number;
  model: string;
  price: string;
  year: string;
}

interface IImage {
  id: string;
  url: string;
}

const CarsContext = createContext<ICarsContext>({} as ICarsContext);

export const CarsProvider = ({ children }: ICarsProps) => {
  const [carId, setCarId] = useState("");
  const [car, setCar] = useState({} as ICar);

  const RequestCarByID = async (id: string) => {
    BaseURL.get(`/cars/${id}`)
      .then((res) => {
        console.log(res.data);
        setCar(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <CarsContext.Provider value={{ RequestCarByID, setCarId, car }}>
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => useContext(CarsContext);
