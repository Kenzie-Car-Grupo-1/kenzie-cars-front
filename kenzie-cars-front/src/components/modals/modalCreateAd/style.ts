import styled from "styled-components";

export const StyledDivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* definir a altura para ocupar toda a tela */
  padding: 20px 5px;
  /* adicionar um margin-top para centralizar na tela */
  position: fixed;
  gap: 24px;
`;

export const StyledFormCreateAd = styled.form`
  width: 100%;
  height: 100%;
  max-width: 520px;

  background: #ffffff;
  border-radius: 8px;
  padding: 18px 16px;
  margin: 0px 1px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: scroll;

  /* Adicione a propriedade z-index para garantir que o modal fique em cima de outros elementos */
  z-index: 9999;

  .title {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    /* Heading/Heading-7-500 */

    font-family: "Lexend";
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey1);
  }

  h4 {
    /* Text/body-2-500 */

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    color: #000000;

    margin-top: 55px;
  }
  label {
    margin-top: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #212529;
  }

  input {
    padding: 0px 16px;
    font-size: 14px;
    width: 100%;
    margin-top: 8px;
    margin-bottom: 24px;
  }

  .div-colum {
    display: flex;
    justify-content: space-between;
    /* margin-top: 24px; */

    div {
      width: 46%;
    }
  }

  textarea {
    width: 100%;
    height: 128px;
    font-family: var(--font-family-3);
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
    padding: 13px 16px;
    border: 1.5px solid #e9ecef;
    resize: none;
    border-radius: 4px;
    background-color: var(--grey9);
    margin-top: 8px;

    &::placeholder {
      vertical-align: top;
      color: var(--grey3);
    }

    &:focus:valid {
      outline: none;
      border: 1.5px solid #5126ea;
    }
  }

  .div-button {
    margin-top: 42px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
      width: 126px;
      height: 48px;

      &:disabled {
        background-color: var(--brand3);
        color: var(--brand4);
      }
    }

    .button-create {
      width: 193px;
    }
  }
`;
