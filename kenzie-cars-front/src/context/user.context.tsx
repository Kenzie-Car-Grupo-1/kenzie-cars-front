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
  EditeProfileUser: (data: any) => Promise<void>;
  DeleteProfileUser: (data: any) => Promise<void>;
  EditAddressUser: (data: any) => Promise<void>;
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
  address: IAddress[];
  createdAt: string;
  updatedAt: string;
  // cars: ICar[];
}

export interface IAddress {
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

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [user, setUser] = useState({} as IUser);
  const [salesman, setSalesman] = useState({} as IUser);
  const [salesmanAds, setSalesmanAds] = useState([]);
  const navigate = useNavigate();
  const {
    setOpenModalSucess,
    openModalSucess,
    setOpenModalEditeProfile,
    openModalEditeProfile,
    setOpenModalDeleteProfile,
    openModalDeleteProfile,
    setOpenModalEditAddress,
    openModalEditAddress,
  } = useModal();

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
      console.log(user.data);
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
      const res = await baseUrl.get(`/users/${id}`);
      setSalesman(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const EditeProfileUser = async (data: any) => {
    try {
      const res = await baseUrl.patch<any>("/users", data, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setOpenModalEditeProfile(!openModalEditeProfile);
      toast.success("Perfil editado com sucesso");
      setUser(res.data);
      console.log(res);
    } catch (error) {
      toast.error("Não foi possivel editar seu perfil");
      console.log(error);
    }
  };

  const EditAddressUser = async (data: any) => {
    const token = localStorage.getItem("token");
    console.log("oi", data)
    try {
      baseUrl.defaults.headers.common.authorization = `Bearer ${token}`;
      const res = await baseUrl.patch<any>(
        `/address/${user.address[0].id}`,
        data
      );
      console.log(res.data);
      setOpenModalEditAddress(!openModalEditAddress);
      toast.success("Endereço editado com sucesso");
      setUser({ ...user, address: res.data });
    } catch (error) {
      toast.error("Não foi possível editar seu endereço");
      console.error(error);
    }
  };

  const DeleteProfileUser = async (data: any) => {
    try {
      const res = await baseUrl.delete<any>("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      setOpenModalDeleteProfile(!openModalDeleteProfile);
      toast.success("Perfil deletado com sucesso");
      setUser(res.data);
      console.log(res);
    } catch (error) {
      toast.error("Não foi possivel deletar seu perfil");
      console.log(error);
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
        EditeProfileUser,
        DeleteProfileUser,
        EditAddressUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
