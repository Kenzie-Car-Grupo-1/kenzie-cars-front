import Button from "../../../Button";
import { StyledDivUser, StyledMenuDesktop, StyledNavDesktop } from "./style";
import LogoUserEx from "../../../../assets/Frame 4.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuDesktop = () => {
  const [openMenuDesk, setOpenMenuDesk] = useState(false);
  const loggedUserId = localStorage.getItem("id");
  const navigate = useNavigate();
  return (
    <>
      {localStorage.token ? (
        <StyledNavDesktop width="243px">
          <StyledDivUser>
            <img src={LogoUserEx} alt="" />
            <h1 onClick={() => setOpenMenuDesk(!openMenuDesk)}>Samuel Leão</h1>
          </StyledDivUser>
          {openMenuDesk && (
            <StyledMenuDesktop
              initial={{ opacity: "0%" }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: "100%" }}
              exit={{ opacity: "0%" }}
            >
              <button>Editar Perfil</button>
              <button>Editar endereço</button>
              <button
                onClick={() => navigate(`/dashboard/${loggedUserId}/ads`)}
              >
                Meus Anúncios
              </button>
              <button>Sair</button>
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
          >
            Cadastrar
          </Button>
        </StyledNavDesktop>
      )}
    </>
  );
};
export default MenuDesktop;
