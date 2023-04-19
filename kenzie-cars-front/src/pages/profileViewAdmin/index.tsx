import Header from "../../components/headers";
import { StyleBox } from "../detailCar/style";
import CardAdvertiser from "../../components/cardAdvertiser";
import { StyledDivBackground } from "../../components/cardAdvertiser/style";
import { StyledAdsListDiv } from "./style";
import Footer from "../../components/Footer";
import CardListAdminPage from "../../components/cardListAdminPage";

const ProfileViewAdmin = () => {
  return (
    <>
      <Header />
      <StyleBox>
        <StyledDivBackground />
        <CardAdvertiser />
      </StyleBox>
      <StyledAdsListDiv>
        <CardListAdminPage />
      </StyledAdsListDiv>
      <Footer />
    </>
  );
};

export default ProfileViewAdmin;
