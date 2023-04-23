import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 90px 0;
  border-radius: 4px;

  background-color: white;

  height: 500px;

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

  p {
    margin: 30px 0;

    font-size: 12px;
    font-weight: 100;

    text-align: center;
  }
  input {
    width: 100%;
    height: 35px;
  }
`;
