import { StyledHeaderMobile, StyledLogo } from "./style";
import Logo from "../../../assets/Motors shop.png";
import MenuMobile from "./menuMobile";
import Icons from "../../../service/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderMobile = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <StyledHeaderMobile>
        <StyledLogo onClick={() => navigate("/dashboard")}>
          <img src={Logo} alt="" />
        </StyledLogo>
        {!openMobile ? (
          <Icons.Menu
            color="var(--grey1)"
            onClick={() => setOpenMobile(!openMobile)}
          />
        ) : (
          <Icons.Close
            color="var(--grey1)"
            onClick={() => setOpenMobile(!openMobile)}
          />
        )}
      </StyledHeaderMobile>

      <MenuMobile open={openMobile} type={localStorage.token ? true : false} />
    </>
  );
};

export default HeaderMobile;
