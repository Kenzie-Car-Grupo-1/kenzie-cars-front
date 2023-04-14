import styled from "styled-components";

export const StyledCarDetails = styled.div`
  position: relative;
  bottom: 10px;
  z-index: 1;

  width: 95%;
  max-width: 750px;
  height: 240px;
  max-height: 240px;

  background: #fdfdfd;

  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  text-align: center;

  padding: 25px;

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);
  }

  .div-extra {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .extra-tags {
      display: flex;
      justify-content: space-between;

      width: 112px;

      p {
        font-family: var(--font-family-3);
        font-size: var(--text-size-8);
        font-weight: var(--font-weight-3);

        color: var(--brand1);
        background-color: var(--brand4);

        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
      }
    }

    p {
      font-family: var(--font-family-1);
      font-size: var(--text-size-7);
      font-weight: var(--font-weight-3);
    }
  }

  @media (min-width: 700px) {
    bottom: 0;
    margin-top: 15px;
  }
`;

export const StyledCarDescription = styled.div`
  width: 95%;
  max-width: 750px;
  height: max-content;

  background: #fdfdfd;

  border-radius: 4px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  padding: 25px;

  position: relative;

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);

    position: relative;
    top: 0px;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #495057;
  }

  @media (min-width: 700px) {
    margin-top: 15px;
  }
`;

export const StyledCarPictures = styled.div`
  width: 95%;
  max-width: 440px;
  min-height: max-content;

  background: #fdfdfd;

  border-radius: 4px;

  margin-top: 20px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  padding: 10px;

  position: relative;

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);

    position: relative;
    top: 0px;
  }
`;

export const StyleBoxPictures = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  div {
    width: 90px;
    height: 90px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 4px;

    background-color: var(--grey6);
  }

  img {
    max-width: 95%;
  }
`;

export const StyledUserProfile = styled.div`
  width: 95%;
  max-width: 440px;
  height: 400px;

  background: #fdfdfd;

  border-radius: 4px;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  padding: 28px;

  position: relative;

  span {
    width: 77px;
    height: 77px;
  }

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);

    position: relative;
    top: 0px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #495057;
    text-align: center;
  }
`;

export const StyledDivImageAndDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  @media (min-width: 700px) {
    /* padding: 40px 0px; */
    margin-bottom: 57px;
  }
`;
export const StyledDivPicturesAndUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 700px) {
    min-height: 755px;
  }
`;
