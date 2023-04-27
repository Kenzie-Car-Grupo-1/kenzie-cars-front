import { useNavigate } from "react-router-dom";
import Button from "../../../Button";
import { StyledNavMobile } from "./style";
import { AnimatePresence } from "framer-motion";
import { useModal } from "../../../../context/modal.context";
import { useUser } from "../../../../context/user.context";

interface IMenuMobile {
  open: boolean;
  type: boolean;
}

const MenuMobile = ({ open, type }: IMenuMobile) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const {
    setOpenModalEditeProfile,
    setOpenModalEditAddress,
    openModalEditAddress,
  } = useModal();
  const loggedUserId = localStorage.getItem("id");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/dashboard");
  };

  return (
    <>
      <AnimatePresence>
        {type
          ? open && (
              <StyledNavMobile
                initial={{ y: "-100%" }}
                transition={{ duration: 1 }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
              >
                <button
                  className="btn-login grey"
                  onClick={() => setOpenModalEditeProfile(true)}
                >
                  Editar Perfil
                </button>
                <button
                  className="btn-login grey"
                  onClick={() => setOpenModalEditAddress(!openModalEditAddress)}
                >
                  Editar Endereço
                </button>
                {/* <button className="btn-login grey">Meus Anúncios</button> */}
                {user.isSalesman === true && (
                  <button
                    className="btn-login grey"
                    onClick={() => navigate(`/dashboard/ads/${loggedUserId}`)}
                  >
                    Meus Anúncios
                  </button>
                )}
                <button onClick={handleLogout} className="btn-login grey">
                  Sair
                </button>
              </StyledNavMobile>
            )
          : open && (
              <StyledNavMobile
                initial={{ y: "-100%" }}
                transition={{ duration: 1 }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
              >
                <Button
                  buttonSize="medium"
                  fontColor="var(--grey2)"
                  className="btn-login"
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Fazer login
                </Button>
                <Button
                  buttonSize="medium"
                  borderColor="var(--grey4)"
                  fontColor="#0B0D0D"
                  backgroundColorHover="#0B0D0D"
                  fontColorHover="white"
                  onClick={() => navigate("/register")}
                >
                  Cadastrar
                </Button>
              </StyledNavMobile>
            )}
      </AnimatePresence>
    </>
  );
};

export default MenuMobile;
