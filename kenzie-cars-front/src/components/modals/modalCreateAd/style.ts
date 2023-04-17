import styled from "styled-components";

export const StyledFormCreateAd = styled.form`
  width: 100%;
  max-width: 520px;
  height: 300px;
  max-height: 300px;

  background: #ffffff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */

  padding: 18px 16px;

  margin: 0px 1px;

  background-size: cover;

  position: relative;
  top: 40px;

  .title {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    /* Heading/Heading-7-500 */

    font-family: "Lexend";
    font-style: normal;
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
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    /* Grey Scale/grey-1 */

    color: #212529;
    margin-top: 24px;
  }

  input {
    padding: 0px 16px;
    font-size: 14px;
    width: 100%;
    margin-top: 8px;
  }

  /* div {
    width: 100%;
    max-width: 312px;
    min-height: 239px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #e9ecef;
    border-radius: 4px;
  } */

  /* img {
    size: cover;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  } */

  /* @media (min-width: 700px) {
    div {
      max-width: 100%;
    }
  } */
`;
