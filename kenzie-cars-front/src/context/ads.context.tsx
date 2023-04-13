import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "../service/axios";

interface ICar {
  id: number;
  brand: string;
  model: string;
  year: string;
  fuel_type: string;
  kms: number;
  color: string;
  price: string;
  description: string;
  images: ICarImages[];
}

interface ICarImages {
  id: number;
  url: string;
}

interface IAdsContext {
  ads: ICar[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface IAdsProps {
  children: ReactNode;
}

const AdsContext = createContext<IAdsContext>({} as IAdsContext);

export const ExempleProvider = ({ children }: IAdsProps) => {
  const [ads, setAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadAds() {
      const cars = await baseUrl.post(`/cars?perPage=12&page=${currentPage}`);
      console.log(cars.data)
      setAds(cars.data);
    }
    loadAds()
  }, []);
  return (
    <AdsContext.Provider value={{ ads, currentPage, setCurrentPage }}>
      {children}
    </AdsContext.Provider>
  );
};

export const useAds = (

) => useContext(AdsContext);
