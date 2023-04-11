import { StyledLogo } from "../headerMobile/style";
import Logo from "../../../assets/Motors shop.png";
import { StyledHeaderDesktop } from "./style";
import MenuDesktop from "./menuDesktop";

const HeaderDesktop = () => {
  return (
    <StyledHeaderDesktop>
      <StyledLogo>
        <img src={Logo} alt="" />
      </StyledLogo>
      <MenuDesktop />
    </StyledHeaderDesktop>
  );
};

export default HeaderDesktop;
