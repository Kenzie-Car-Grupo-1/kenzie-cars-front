import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #0b0d0d;

  height: 310px;
  width: 100%;

  position: relative;
  bottom: 0;
  padding: 45px 55px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 9;

  h2 {
    color: white;
    span {
      font-size: 16px;
    }
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
  }

  button {
    background: #212529;
    border-radius: 4px;
    border: none;
    width: 53px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 760px) {
    flex-direction: row;

    height: 140px;
  }
`;
