import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "../service/axios";

interface ICarsContext {
  RequestCarByID: (id: string) => Promise<void>;
  setCarId: React.Dispatch<React.SetStateAction<string>>;
  car: ICar;
  ads: ICar[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  allAds: number;
  UpdateCarById: (data: ICar, id: string) => Promise<void>;
}

interface ICarsProps {
  children: ReactNode;
}

export interface ICar {
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
  const [ads, setAds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allAds, setAllAds] = useState(0);

  const RequestCarByID = async (id: string) => {
    baseUrl
      .get(`/cars/${id}`)
      .then((res: any) => {
        console.log(res.data);
        setCar(res.data);
      })
      .catch((err: any) => console.log(err));
  };

  const UpdateCarById = async (data: ICar, id: string) => {
    try {
      const car = await baseUrl.patch(`/cars/${id}`, data);
      setCar(car.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function LoadAds() {
      try {
        const cars = await baseUrl.get(`/cars?perPage=12&page=${currentPage}`);
        console.log(cars.data);
        setAds(cars.data.result);
        setAllAds(cars.data.howManyFetched);
      } catch (error) {
        console.error(error);
      }
    }
    LoadAds();
  }, [currentPage]);

  return (
    <CarsContext.Provider
      value={{
        RequestCarByID,
        setCarId,
        car,
        ads,
        currentPage,
        setCurrentPage,
        allAds,
        UpdateCarById,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => useContext(CarsContext);
