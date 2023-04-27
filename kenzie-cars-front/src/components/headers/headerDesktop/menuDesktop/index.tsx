import Button from "../../../Button";
import { StyledDivUser, StyledMenuDesktop, StyledNavDesktop } from "./style";
import LogoUserEx from "../../../../assets/Frame 4.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../context/user.context";
import { TagInitials } from "../../../cardAdvertiser/style";
import TagUserInitials from "../../../tagInitials";
import { useModal } from "../../../../context/modal.context";

const MenuDesktop = () => {
  const [openMenuDesk, setOpenMenuDesk] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const loggedUserId = localStorage.getItem("id");
  const { user } = useUser();
  const {
    setOpenModalEditeProfile,
    setOpenModalEditAddress,
    openModalEditAddress,
  } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    const name = user.firstname + " " + user.lastname;
    setUserName(name);
    setIsLoading(false);
  }, [user]);

  const handleLogout = () => {
    setUserName("");
    localStorage.clear();
    navigate("/dashboard");
  };

  return (
    <>
      {localStorage.token ? (
        <StyledNavDesktop width="243px">
          <StyledDivUser>
            {user && user.firstname && user.lastname && (
              <>
                <TagUserInitials
                  firstName={user.firstname}
                  lastName={user.lastname}
                  uuid={user.id}
                />
                <h1 onClick={() => setOpenMenuDesk(!openMenuDesk)}>
                  {userName}
                </h1>
              </>
            )}
          </StyledDivUser>
          {openMenuDesk && (
            <StyledMenuDesktop
              initial={{ opacity: "0%" }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: "100%" }}
              exit={{ opacity: "0%" }}
            >
              <button onClick={() => setOpenModalEditeProfile(true)}>
                Editar Perfil
              </button>
              <button
                onClick={() => setOpenModalEditAddress(!openModalEditAddress)}
              >
                Editar Endereço
              </button>
              {user.isSalesman === true && (
                <button
                  onClick={() => navigate(`/dashboard/ads/${loggedUserId}`)}
                >
                  Meus Anúncios
                </button>
              )}
              <button onClick={handleLogout}>Sair</button>
            </StyledMenuDesktop>
          )}
        </StyledNavDesktop>
      ) : (
        <StyledNavDesktop width="300px">
          <Button
            buttonSize="big"
            backgroundColor="white"
            fontColor="#0B0D0D"
            fontColorHover="var(--grey0)"
            borderColorHover="1.5px solid var(--grey4)"
            borderColor="1px solid var(--grey4)"
            onClick={() => navigate("/login")}
          >
            Fazer Login
          </Button>
          <Button
            buttonSize="big"
            backgroundColor="white"
            fontColor="#0B0D0D"
            fontColorHover="white"
            borderColorHover="1.5px solid var(--grey4)"
            borderColor="var(--grey4)"
            backgroundColorHover="#0B0D0D"
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </Button>
        </StyledNavDesktop>
      )}
    </>
  );
};
export default MenuDesktop;
