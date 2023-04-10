import { StyledFooter } from "./style";
3;
import { FaAngleUp } from "react-icons/fa";

// interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   backgroundColor?: string;
//   fontColor?: string;
//   buttonSize: "big" | "medium";
//   borderColor?: string;
// }

const Footer = () => {
  return (
    <StyledFooter>
      <h2>
        Motors <span>shop</span>
      </h2>
      <p>@ 2022 - Todos os direitos reservados</p>
      <button>
        <FaAngleUp color="white" />
      </button>
    </StyledFooter>
  );
};

export default Footer;
