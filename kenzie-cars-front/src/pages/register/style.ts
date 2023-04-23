import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 90px 0;
  border-radius: 4px;

  background-color: white;

  height: 1200px;

  width: 380px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;

    width: 300px;
    height: 400px;

    justify-content: center;
  }
  h1 {
    margin-top: -35px;
    margin-bottom: 30px;
  }

  label {
    margin: 10px 0;

    font-size: 14px;
    font-weight: 100;
  }

  span {
    font-size: 14px;
    margin-bottom: 30px;

    text-align: end;
  }
  h2 {
    padding: 30px 0 5px 0;
    font-size: 15px;
  }

  p {
    margin: 30px 0;

    font-size: 12px;
    font-weight: 100;

    text-align: center;
  }
  input {
    width: 100%;
    min-height: 35px;
  }

  button {
    margin-top: 20px;
  }
`;

export const BoxSection = styled.section`
  width: 100%;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;

    margin-left: -15px;

    margin-right: 8px;

    padding: 0 5px;

    height: 80px;

    label {
      padding: 0 10px;
    }
    #comprador {
      background-color: #4529e6;
    }
    #anunciante {
    }
    input {
      width: 100%;
      margin: 0 0.5em;
    }
  }
`;
