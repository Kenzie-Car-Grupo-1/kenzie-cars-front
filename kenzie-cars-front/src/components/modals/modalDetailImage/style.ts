import styled from "styled-components";

export const StyledImageCarModal = styled.div`
  width: 100%;
  max-width: 520px;
  height: 354px;

  background: #ffffff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  padding: 20px 10px;

  /* margin: 0px 10px; */
  margin: 0px auto;

  background-size: cover;

  position: relative;
  top: 40px;

  @media (min-width: 700) {
    padding: 18px 24px;
  }

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--grey1);
  }

  div {
    width: 100%;
    max-width: 312px;
    min-height: 239px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #e9ecef;
    border-radius: 4px;
    justify-content: center;
  }

  img {
    size: cover;
    /* width: 100%; */
    height: 100%;
    border-radius: 4px;
    overflow: auto;
  }

  @media (min-width: 700px) {
    div {
      max-width: 100%;
    }
  }
`;
