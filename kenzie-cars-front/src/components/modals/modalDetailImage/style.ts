import styled from "styled-components";

export const StyledImageCarModal = styled.div`
  width: 100%;
  max-width: 520px;
  height: 300px;

  background: #ffffff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  margin: 0px 10px;

  background-size: cover;

  position: relative;
  top: 40px;

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
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 700px) {
    div {
      max-width: 100%;
    }
  }
`;
