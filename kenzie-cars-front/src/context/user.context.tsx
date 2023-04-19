import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { baseUrl } from "../service/axios";

interface IUserContext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface IUserProps {
  children: ReactNode;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function LoadAds() {
      try {
        const cars = await baseUrl.get(`/cars?perPage=12&page=${currentPage}`);
        console.log(cars.data)
        // setAds(cars.data.result);
        // setAllAds(cars.data.howManyFetched)
      } catch (error) {
        console.error(error)
      }
    }
    LoadAds()
  }, [currentPage])

  return (
    <UserContext.Provider value={{currentPage, setCurrentPage}}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
