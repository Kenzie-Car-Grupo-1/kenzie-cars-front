import { StyledHeaderMobile, StyledLogo } from "./style";
import Button from "../../Button";
import Logo from "../../../assets/Motors shop.png";

const HeaderMobile = () => {
  return (
    <StyledHeaderMobile>
      <StyledLogo>
        <img src={Logo} alt="" />
      </StyledLogo>
      <div>
        <Button
          buttonSize="medium"
          fontColor="var(--grey2)"
          backgroundColor="white"
        >
          Fazer login
        </Button>
      </div>
    </StyledHeaderMobile>
  );
};

export default HeaderMobile;
