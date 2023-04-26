import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "../service/axios";
import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";
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
  GetCarsByUser: (id: string) => Promise<void>;
  adsbyUser: ICar[];
  filteredAds: ICar[];
  setFilteredAds: React.Dispatch<React.SetStateAction<ICar[]>>;
  fetchModelsAPI: (brand: string) => Promise<IModelCar[]>;
  setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
  isFilterActive: boolean;
  ListAdsFiltered: (queryParams: string) => Promise<void>;
}

interface IModelCar {
  id: string;
  name: string;
  brand: string;
  fuel: string;
  value: string;
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
  const [filteredAds, setFilteredAds] = useState<ICar[]>([]);
  const [adsbyUser, setAdsbyUser] = useState<ICar[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allAds, setAllAds] = useState(0);
  const { setOpenModalSucess, setOpenModalCreateAd } = useModal();
  const [isFilterActive, setIsFilterActive] = useState(false);

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

  const GetCarsByUser = async (id: string) => {
    try {
      const car = await baseUrl.get(`/users/${id}/cars`);
      setAdsbyUser(car.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const LoadAds = async () => {
      try {
        const cars = await baseUrl.get(`/cars?perPage=12&page=${currentPage}`);
        setAds(cars.data.result);
        // setAllAds(cars.data.howManyFetched);
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
      setAds([res.data, ...ads]);
      setOpenModalCreateAd(false);
      setOpenModalSucess(true);
    } catch (error) {
      console.error(error);
      toast.error("Houve um erro, tente novamente!");
    }
  };

  const fetchModelsAPI = async (brand: string) => {
    const formattedOption = brand.toLocaleLowerCase();

    try {
      const response = await axios.get(
        `https://kenzie-kars.herokuapp.com/cars?brand=${formattedOption}`
      );

      const models = response.data;
      return models;
    } catch (error) {
      console.error(error);
    }
  };

  const ListAdsFiltered = async (queryParams: string) => {
    try {
      const cars = await baseUrl.get(
        `/cars?perPage=12&page=${currentPage}&${queryParams}`
      );
      setFilteredAds(cars.data.result);
      setAllAds(cars.data.howManyFetched);
      // setCurrentPage(1);
    } catch (error) {
      console.error(error);
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
        GetCarsByUser,
        adsbyUser,
        filteredAds,
        setFilteredAds,
        fetchModelsAPI,
        isFilterActive,
        setIsFilterActive,
        ListAdsFiltered,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => useContext(CarsContext);
