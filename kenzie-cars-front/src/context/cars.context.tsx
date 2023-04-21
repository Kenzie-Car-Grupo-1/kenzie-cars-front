import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "../service/axios";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import { IUser } from "./user.context";
import { useModal } from "./modal.context";

interface ICarsContext {
  RequestCarByID: (id: string) => Promise<void>;
  RegisterCarAd: (data: ICarRequest, token: string) => Promise<void>;
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
  user: IUser;
}

interface ICarRequest {
  brand: string;
  color: string;
  description: string;
  fuel_type: string;
  images: string[];
  kms: number | null;
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
  const [ads, setAds] = useState<ICar[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allAds, setAllAds] = useState(0);
  const { setOpenModalSucess, setOpenModalCreateAd } = useModal();

  const RequestCarByID = async (id: string) => {
    try {
      const res = await baseUrl.get(`/cars/${id}`);
      console.log(res.data);
      setCar(res.data);
    } catch (error) {
      console.log(error);
    }
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
    const LoadAds = async () => {
      try {
        const cars = await baseUrl.get(`/cars?perPage=12&page=${currentPage}`);
        console.log(cars.data);
        setAds(cars.data.result);
        setAllAds(cars.data.howManyFetched);
      } catch (error) {
        console.error(error);
      }
    };
    LoadAds();
  }, [currentPage]);

  const RegisterCarAd = async (data: ICarRequest, token: string) => {
    try {
      const res = await baseUrl.post<ICar>("/cars", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setAds([res.data, ...ads]);
      setOpenModalCreateAd(false);
      setOpenModalSucess(true);
    } catch (error) {
      console.error(error);
      toast.error("Houve um erro, tente novamente!");
    }
  };

  return (
    <CarsContext.Provider
      value={{
        RequestCarByID,
        RegisterCarAd,
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
