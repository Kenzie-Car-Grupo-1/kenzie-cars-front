import styled from "styled-components";

export const StyledDivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  /* adicionar um margin-top para centralizar na tela */
  /* position: fixed; */
  gap: 24px;
  height: max-content;
  background-color: var(--grey8);
  height: calc(100vh - 80px - 140px);
  max-height: 100vh;

  footer {
    position: absolute;
    bottom: 0;
  }
`;

export const StyledFormReset = styled.form`
  width: 100%;
  /* height: 100%; */
  max-width: 520px;

  background: #ffffff;
  border-radius: 8px;
  padding: 35px 30px;
  margin: 0px 1px;

  h3 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }

  p {
    margin-top: 32px;
    font-family: var(--font-family-1);
    font-weight: var(--font-weight-3);
    font-size: var(--text-size-7);
    color: var(--grey3);
    line-height: 20px;
    margin-bottom: 32px;
  }

  label {
    font-family: var(--font-family-1);
    font-weight: var(--font-weight-3);
    font-size: var(--text-size-8);
    color: var(--grey1);
    line-height: 17px;
  }

  input {
    padding: 0px 16px;
    font-size: var(--text-size-8);
    width: 100%;
    margin-top: 8px;
    margin-bottom: 10px;
  }

  span {
    height: 16px;
    font-size: 12px;
    color: var(--alert-1);
    display: block;
    /* margin-bottom: 10px; */
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      /* width: 100%; */
      /* max-width: 100px; */
      margin-top: 20px;
    }

    .login {
      padding: 0px;
      font-size: 14px;
      color: var(--grey3);
    }
  }
`;
