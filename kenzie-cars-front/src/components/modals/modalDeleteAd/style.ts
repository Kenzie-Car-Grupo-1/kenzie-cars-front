import styled from "styled-components";

export const StyledModalDelete = styled.div`
  border-radius: 4px;
  background-color: white;
  width: 100%;
  max-width: 412px;
  padding: 24px 16px 24px 24px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 40px auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    position: relative;

    /* width: 300px;
    height: 400px; */
    .title {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      flex-direction: row;

      button {
        position: static;
      }
    }
  }

  h2 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  h3 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-top: 43px;

    color: #000000;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* or 175% */

    /* Grey Scale/grey-2 */

    color: #495057;
    margin-top: 25px;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 43px;
  }
`;
