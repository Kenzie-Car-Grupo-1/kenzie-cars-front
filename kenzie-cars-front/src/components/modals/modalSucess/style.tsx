import styled from "styled-components";

export const StyledModalSucess = styled.div`
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  padding: 18px 24px 38px 24px;

  width: 90%;

  margin-top: 58px;

  max-width: 520px;

  @media (min-width: 760px) {
    margin-top: 80px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      position: relative;
    }
  }

  h3 {
    /* Heading/Heading-7-500 */

    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    /* Grey Scale/grey-1 */

    color: #212529;
  }

  h4 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    margin-top: 58px;
    /* identical to box height */

    /* Grey Scale/grey-1 */

    color: #212529;
  }

  p {
    /* Text/body-1-400 */

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    margin-top: 20px;
    /* or 175% */

    /* Grey Scale/grey-2 */

    color: #495057;
  }

  button {
    max-width: 150px;
    margin-top: 20px;
  }
`;
