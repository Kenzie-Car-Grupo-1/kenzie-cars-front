import React from "react";
import Header from "../../components/headers";
import { StyleBox} from "../detailCar/style";
import CardAdvertiser from "../../components/cardAdvertiser";
import { StyledDivBackground } from "../../components/cardAdvertiser/style";
import { StyledAdsListDiv } from "./style";
import Footer from "../../components/Footer";
import CardList from "../../components/CardList";

const ProfileViewUser = () => {
  return (
    <>
      <Header />
      <StyleBox>
        <StyledDivBackground />
        <CardAdvertiser />
      </StyleBox>
      <StyledAdsListDiv>
        <p>Anúncios</p>
        {/* <ul></ul> */}
        <CardList />
      </StyledAdsListDiv>
      <Footer />
    </>
  );
};

export default ProfileViewUser;
