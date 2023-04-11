import Button from "../../../Button";
import { StyledDivUser, StyledMenuDesktop, StyledNavDesktop } from "./style";
import LogoUserEx from "../../../../assets/Frame 4.png";
import { useState } from "react";

const MenuDesktop = () => {
  const [openMenuDesk, setOpenMenuDesk] = useState(false);
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
              <button>Meus Anúncios</button>
              <button>Sair</button>
            </StyledMenuDesktop>
          )}
        </StyledNavDesktop>
      ) : (
        <StyledNavDesktop width="300px">
          <Button
            buttonSize="medium"
            backgroundColor="white"
            fontColor="var(--grey4)"
            fontColorHover="var(--grey0)"
            borderColorHover="1.5px solid var(--grey4)"
          >
            Fazer Login
          </Button>
          <Button
            buttonSize="medium"
            backgroundColor="white"
            fontColor="var(--grey4)"
            fontColorHover="var(--grey0)"
            borderColorHover="1.5px solid var(--grey4)"
          >
            Cadastrar
          </Button>
        </StyledNavDesktop>
      )}
    </>
  );
};
export default MenuDesktop;
