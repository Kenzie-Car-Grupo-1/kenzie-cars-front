import Icons from "../../service/icons";
import { StyledFooter } from "./style";
3;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter>
      <h2>
        Motors <span>shop</span>
      </h2>
      <p>@ 2022 - Todos os direitos reservados</p>
      <button onClick={scrollToTop}>
        <Icons.ArrowUP color="white" />
      </button>
    </StyledFooter>
  );
};

export default Footer;
