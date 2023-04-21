import Button from "../../../Button";
import { StyledNavMobile } from "./style";
import { AnimatePresence } from "framer-motion";

interface IMenuMobile {
  open: boolean;
  type: boolean;
}

const MenuMobile = ({ open, type }: IMenuMobile) => {
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
                <button className="btn-login grey">Editar Perfil</button>
                <button className="btn-login grey">Editar endereço</button>
                <button className="btn-login grey">Meus Anúncios</button>
                <button className="btn-login grey">Sair</button>
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
