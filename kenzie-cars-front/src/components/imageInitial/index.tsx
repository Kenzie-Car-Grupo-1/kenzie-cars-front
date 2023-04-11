import {
  StyledBackgroundImage,
  StyledBoxImageHome,
  StyledImgText,
} from "./style";

import homeImage from "../../assets/06a5984f915f5060d7a5f3e0a5f7560d.png";

const ImageInitial = () => {
  return (
    <StyledBoxImageHome>
      <StyledBackgroundImage />
      <img src={homeImage} alt="" />
      <StyledImgText>
        <p>Motors shop</p>
        <h4>A melhor plataforma de anúncios de carros do país</h4>
      </StyledImgText>
    </StyledBoxImageHome>
  );
};

export default ImageInitial;
