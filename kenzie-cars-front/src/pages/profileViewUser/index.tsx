import { StyledDivBackground } from "../../components/cardAdvertiser/style";
import CardAdvertiserViewUser from "../../components/cardAdvertiserViewUser";
import CardListViewUser from "../../components/cardListViewUser";
import Footer from "../../components/footer";
import Header from "../../components/headers";
import PaginationBarAdmin from "../../components/paginationBarAdmin";
import { StyleBox } from "../detailCar/style";
import { StyledAdsListDiv } from "../profileViewAdmin/style";
import { StyledAds } from "./style";

const ProfileViewUser = () => {
    return (
      <>
        <Header />
        <StyleBox>
          <StyledDivBackground />
          <CardAdvertiserViewUser />
        </StyleBox>
        <StyledAdsListDiv>
          <StyledAds>Anúncios</StyledAds>
          <CardListViewUser />
          <PaginationBarAdmin />
        </StyledAdsListDiv>
        <Footer />
      </>
    );
  };

export default ProfileViewUser
