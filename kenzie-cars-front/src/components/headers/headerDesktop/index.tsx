import { StyledLogo } from "../headerMobile/style";
import Logo from "../../../assets/Motors shop.png";
import { StyledHeaderDesktop } from "./style";
import MenuDesktop from "./menuDesktop";
import { useNavigate } from "react-router-dom";

const HeaderDesktop = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderDesktop>
      <StyledLogo onClick={() => navigate(`/dashboard`)}>
        <img src={Logo} alt="" />
      </StyledLogo>
      <MenuDesktop />
    </StyledHeaderDesktop>
  );
};

export default HeaderDesktop;
