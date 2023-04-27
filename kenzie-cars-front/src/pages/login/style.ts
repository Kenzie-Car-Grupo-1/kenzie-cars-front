import styled from "styled-components";

export const StyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  background-color: var(--grey8);

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;

    background-color: var(--grey8);

    min-height: calc(100vh - 80px - 140px);
  }
`;

export const StyledForm = styled.form`
  /* margin: 90px 0; */
  border-radius: 4px;

  background-color: white;
  padding: 44px 28px;
  width: 95%;
  max-width: 412px;
  display: flex;

  /* height: 500px; */

  /* width: 380px; */

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0px;

  @media (min-width: 760px) {
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    /* width: 300px;
    height: 400px; */
  }
  h1 {
    margin-bottom: 32px;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
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
