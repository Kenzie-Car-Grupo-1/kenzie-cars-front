import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { baseUrl } from "../service/axios";
import { ICar } from "./cars.context";
import { useNavigate } from "react-router-dom";
import { useModal } from "./modal.context";
import { toast } from "react-toastify";

interface IUserContext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  GetSalesmanById: (id: string | null) => Promise<void>;
  salesman: IUser;
  LoginUser: (data: IUserLogin) => Promise<void>;
  user: IUser;
  registerNewUser: (data: IUserRegister) => Promise<void>;
  salesmanAds: ICar[];
}

interface IUserProps {
  children: ReactNode;
}

interface IUserRegister {
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
  address: Omit<IAddress, "id">;
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
  address: IAddress;
  createdAt: string;
  updatedAt: string;
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
  const navigate = useNavigate();
  const { setOpenModalSucess, openModalSucess } = useModal();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");

    const LoadInfoUser = async () => {
      if (token) {
        try {
          baseUrl.defaults.headers.common.authorization = `Bearer ${token}`;
          const user = await baseUrl.get(`/users/${id}`);
          setUser(user.data);
        } catch (error) {
          localStorage.clear();
          console.error(error);
        }
      }
    };

    LoadInfoUser();
  }, []);

  const LoginUser = async (data: IUserLogin): Promise<void> => {
    try {
      const user = await baseUrl.post("/session", data);
      console.log('oioi', user.data)
      setUser(user.data.user);
      if (user.data.isSalesman) {
        setSalesmanAds(user.data.user.cars);
      }
      localStorage.clear();
      localStorage.setItem("token", user.data.token);
      localStorage.setItem("id", user.data.user.id);
      toast.success("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Usuário ou senha inválido");
    }
  };

  const registerNewUser = async (data: IUserRegister): Promise<void> => {
    try {
      const res = await baseUrl.post<IUserRegister>("/users", data);
      setOpenModalSucess(!openModalSucess);
      console.log(res);
    } catch (error) {
      toast.error("Não foi possivel criar sua conta! Tente novamente");
      console.log(error);
    }
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
        registerNewUser,
        salesmanAds,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
