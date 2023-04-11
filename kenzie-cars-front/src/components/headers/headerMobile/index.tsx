import { StyledHeaderMobile, StyledLogo } from "./style";
import Logo from "../../../assets/Motors shop.png";
import MenuMobile from "./menuMobile";
import Icons from "../../../service/icons";
import { useState } from "react";

const HeaderMobile = () => {
  const [openMobile, setOpenMobile] = useState(false);
  return (
    <>
      <StyledHeaderMobile>
        <StyledLogo>
          <img src={Logo} alt="" />
        </StyledLogo>
        <Icons.Menu
          color="var(--grey1)"
          onClick={() => setOpenMobile(!openMobile)}
        />
      </StyledHeaderMobile>

      <MenuMobile open={openMobile} type={localStorage.token ? true : false} />
    </>
  );
};

export default HeaderMobile;
