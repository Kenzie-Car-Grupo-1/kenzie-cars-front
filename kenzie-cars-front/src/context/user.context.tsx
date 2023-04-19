import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "../service/axios";
import { ICar } from "./cars.context";

interface IUserContext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  GetSalesmanById: (id: string) => Promise<void>;
  salesman: IUser;
}

interface IUserProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  cpf: string;
  contact: string;
  isWhatsapp: boolean;
  birthdate: string;
  description: string;
  isSalesman: boolean;
  address: IAddress[];
  cars: ICar[];
}

interface IAddress {
  id: string;
  street: string;
  number: string;
  cep: string;
  city: string;
  state: string;
  complement: string;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState({} as IUser);
  const [salesman, setSalesman] = useState({} as IUser);
  const [salesmanAds, setSalesmanAds] = useState([]);

  useEffect(() => {
    const LoadInfoUser = async () => {
      const token = localStorage.getItem("@token: Kenzie-Cars");
      const id = localStorage.getItem("@id: Kenzie-Cars");

      if (token) {
        try {
          baseUrl.defaults.headers.common.authorization = `Bearer ${token}`;
          const user = await baseUrl.get<IUser>(`/users/${id}`);
          setUser(user.data);
          // localStorage.setItem("@token: Kenzie-Cars", user.data.token);
          // localStorage.setItem("@id: Kenzie-Cars", user.data.);
        } catch (error) {
          localStorage.clear();
          console.error(error);
        }
      }
      LoadInfoUser();
    };
  }, []);

  const LoginUser = async (data: any) => {
    const user = await baseUrl.post("/session", data);
    setUser(user.data);
  };

  const GetSalesmanById = async (id: string) => {
    try {
      const user = await baseUrl.get(`/users/${id}`);
      console.log(user.data);
      setSalesman(user.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ currentPage, setCurrentPage, GetSalesmanById, salesman }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
