import styled from "styled-components";

export const StyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 52px 16px;

  background-color: var(--grey8);

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;

    background-color: var(--grey8);
  }
`;

export const StyledForm = styled.form`
  /* margin: 90px 0; */
  border-radius: 4px;

  background-color: white;
  padding: 24px 16px 24px 24px;
  width: 100%;
  max-width: 412px;
  display: flex;

  /* height: 500px; */

  /* width: 380px; */

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: relative;

    /* width: 300px;
    height: 400px; */
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

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
    margin-bottom: 24px;
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
  }

  a {
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
    align-self: flex-end;
    margin-bottom: 21px;
    text-decoration: none;
  }

  .error {
    height: 16px;
    font-size: 12px;
    color: var(--alert-1);
    display: block;
    margin-bottom: 2px;
    align-self: end;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey2);
    align-self: center;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
export const BoxSection = styled.section`
  width: 100%;
  display: flex;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    #comprador {
      background-color: #4529e6;
    }
    #anunciante {
    }
    input {
      width: 100%;
    }

    .radio-button-label input[type="radio"] {
      display: none;
    }

    .radio-button-text {
      display: inline-block;
      position: relative;
      cursor: pointer;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey0);
      z-index: 5;
      border: 1.5px solid var(--grey4);
      border-radius: 4px;
      padding: 10px 22px;
      width: 100%;
      text-align: center;
      margin: 28px 0px 10px 0;
    }

    .radio-button-label input[type="radio"]:checked ~ .radio-button-text {
      background-color: var(--brand2);
      color: white;
      border-color: var(--brand2);
    }
  }
`;
