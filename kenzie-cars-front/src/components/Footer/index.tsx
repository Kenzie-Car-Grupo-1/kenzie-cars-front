import Icons from "../../service/icons";
import { StyledFooter } from "./style";
3;

const Footer = () => {
  return (
    <StyledFooter>
      <h2>
        Motors <span>shop</span>
      </h2>
      <p>@ 2022 - Todos os direitos reservados</p>
      <button>
        <Icons.ArrowUP color="white" />
      </button>
    </StyledFooter>
  );
};

export default Footer;
