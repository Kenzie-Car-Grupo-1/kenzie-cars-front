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
                <button>Editar Perfil</button>
                <button>Editar endereço</button>
                <button>Meus Anúncios</button>
                <button>Sair</button>
              </StyledNavMobile>
            )
          : open && (
              <StyledNavMobile
                initial={{ y: "-100%" }}
                transition={{ duration: 1 }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
              >
                <button> Fazer login</button>
                <button> Cadastrar</button>
              </StyledNavMobile>
            )}
      </AnimatePresence>
    </>
  );
};

export default MenuMobile;
