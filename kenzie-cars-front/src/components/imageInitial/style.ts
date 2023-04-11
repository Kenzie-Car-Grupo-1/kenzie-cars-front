import styled from "styled-components";

export const StyledBoxImageHome = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: unset;
  color: #1a1a1a 20%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  min-height: 300px;
  max-width: 100%;

  img {
    width: 100%;
    max-width: 1024px;
  }
`;

export const StyledBackgroundImage = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;

  position: absolute;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
`;

export const StyledImgText = styled.div`
  position: absolute;
  top: 0%;
  width: 80%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 100%;
    font-size: auto;
    position: relative;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 93px;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    display: flex;
    justify-content: center;

    margin-top: 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 60px;
    text-align: center;

    color: var(--grey10);
  }

  @media (min-width: 700px) {
    top: 30%;
  }

  @media (max-width: 700px) {
    width: 90%;

    p {
      font-size: 37px;
      line-height: 62px;
    }
    h4 {
      font-size: 15px;
      line-height: 30px;
    }
  }
`;
