import styled from "styled-components";

export const StyledDivContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* definir a altura para ocupar toda a tela */
  padding: 20px 0px;
  /* adicionar um margin-top para centralizar na tela */
  /* position: fixed; */
  gap: 24px;
`;

export const StyledFormCreateAd = styled.form`
  width: 100%;
  height: 100%;
  max-width: 520px;

  background: #ffffff;
  border-radius: 8px;
  padding: 24px 16px 24px 24px;
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
    align-items: center;

    button {
      position: static;
    }
  }

  h3 {
    font-family: var(--font-family-1);
    font-weight: var(--font-weight-3);
    font-size: var(--text-size-7);
    color: var(--grey1);
    line-height: 20px;
  }

  h4 {
    font-family: var(--font-family-3);
    font-weight: var(--font-weight-3);
    font-size: var(--text-size-8);
    line-height: 24px;
    color: #000000;
    margin-top: 32px;
  }
  label {
    margin-top: 24px;
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

  select {
    padding: 0px 16px;
    font-size: var(--text-size-8);
    width: 100%;
    margin-top: 8px;
    margin-bottom: 24px;
    height: 48px;
    border: 1.5px solid #e9ecef;
    background-color: var(--grey9);
    color: var(--grey3);

    option {
      color: var(--grey1);
    }

    &:focus:valid {
      outline: none;
      border: 1.5px solid var(--brand2);
    }

    .div-colum {
      display: flex;
      justify-content: space-between;
      /* margin-top: 24px; */

      div {
        width: 46%;
      }
    }
  }
  textarea {
    width: 100%;
    height: 128px;
    font-family: var(--font-family-3);
    font-weight: var(--font-weight-4);
    font-size: var(--text-size-8);
    line-height: 26px;
    padding: 13px 16px;
    border: 1.5px solid --brand1;
    resize: none;
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 10px;

    &:hover {
      background-color: var(--grey8);
    }

    &::placeholder {
      vertical-align: top;
      color: var(--grey3);
      font-size: var(--text-size-8);
    }

    &:focus:valid {
      outline: none;
      border: 1.5px solid #5126ea;
    }
  }
  .add-input {
    margin-top: 10px;
  }
  .div-button {
    margin-top: 42px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
      height: 48px;

      &:disabled {
        background-color: var(--brand3);
        color: var(--brand4);
      }
    }

    .button-create {
      width: 100%;
      max-width: 193px;
    }
  }
`;

export const RegisterPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.4);

  main {
    width: 30%;
    min-width: 320px;
    height: 350px;
    background-color: white;
    border-radius: 4px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    border: solid 2px var(--brand3);
  }
  header {
    display: flex;
    margin: 10px auto;
    width: 80%;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    color: black;
    font-size: 16px;
  }
  .close {
    background-color: transparent;
    border: none;
    font-size: 16px;
  }
  .modalForm {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: none;
    gap: 10px;
    width: 80%;
    height: 100%;
    margin: 15px auto;
  }
  textarea {
    font-family: "Inter";
    color: black;
    height: 80%;
    max-width: 100%;

    font-size: 15px;
    border-radius: 4px;
    border: solid 1px var(--brand4);
    padding: 4px;
  }

  div {
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    gap: 5px;
    .edit {
      color: #3fe864;
      border: none;
      font-size: 30px;
      width: 49%;
    }
    .delete {
      color: #ff000096;
      border: none;
      font-size: 30px;
      width: 49%;
    }
  }
`;
