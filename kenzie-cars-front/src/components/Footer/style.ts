import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #0b0d0d;

  height: 310px;
  width: 100%;

  position: absolute;
  bottom: 0;
  padding: 45px 55px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
    padding: 16px 22px;
    border: none;
  }

  @media (min-width: 760px) {
    flex-direction: row;

    height: 140px;
  }
`;
