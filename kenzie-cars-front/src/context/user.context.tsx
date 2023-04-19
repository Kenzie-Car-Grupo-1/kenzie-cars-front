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
  GetSalesmanById: (id: string | null) => Promise<void>;
  salesman: IUser;
  LoginUser: (data: IUserLogin) => Promise<void>;
  user: IUser;
}

interface IUserProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  cpf: string;
  contact: string;
  isWhatsapp: boolean;
  birthdate: string;
  description: string;
  isSalesman: boolean;
  address: IAddress[];
  // cars: ICar[];
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

interface IUserLogin {
  email: string;
  password: string;
}

const mockedSalesman = {
  createdAt: "2023-04-19T17:45:13.827Z",
  updatedAt: "2023-04-19T17:45:13.827Z",
  id: "832d3c5c-067b-4f5f-a916-422d309995ec",
  firstname: "Antonio",
  lastname: "Neto",
  email: "antonio@mail.com",
  cpf: "33322211100",
  contact: "92000220023",
  isWhatsapp: true,
  birthdate: "25/08/1976",
  description: "Vendedor de carros",
  isSalesman: true,
  address: [
    {
      createdAt: "2023-04-19T17:45:14.147Z",
      updatedAt: "2023-04-19T17:45:14.147Z",
      id: "9509e612-fbdc-41d1-baf8-768e6e30d9c5",
      street: "rua one",
      number: "899",
      cep: "90340340",
      city: "Brasilia",
      state: "oregon",
      complement: "ap 202",
    },
  ],
};

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState({} as IUser);
  const [salesman, setSalesman] = useState({} as IUser);
  const [salesmanAds, setSalesmanAds] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const LoadInfoUser = async () => {
      if (token) {
        try {
          baseUrl.defaults.headers.common.authorization = `Bearer ${token}`;
          const user = await baseUrl.get(`/users/${id}`);
          console.log(user.data);
          setUser(user.data);
          localStorage.setItem("token", user.data.token);
          localStorage.setItem("id", user.data.user.id);
        } catch (error) {
          localStorage.clear();
          console.error(error);
        }
      }
      LoadInfoUser();
    };
  }, []);

  const LoginUser = async (data: IUserLogin) => {
    const user = await baseUrl.post("/session", data);
    setUser(user.data);
    if (user.data.isSalesman) {
      setSalesmanAds(user.data.cars);
    }
    localStorage.setItem("token", user.data.token);
    localStorage.setItem("id", user.data.user.id);
  };

  const GetSalesmanById = async (id: string | null) => {
    try {
      const salesman = await baseUrl.get(`/users/${id}`);
      console.log(salesman.data);
      setSalesman(salesman.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        GetSalesmanById,
        salesman,
        LoginUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
