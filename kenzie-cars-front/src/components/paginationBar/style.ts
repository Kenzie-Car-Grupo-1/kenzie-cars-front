import styled from "styled-components";

export const Bar = styled.div`
  width: 100%;
  height: 270px;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-bottom: 48px;
  }

  .div-pages {
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 16px 0;

    .current-page .next-page {
      font-family: var(--font-family-1);
      font-weight: var(--font-weight-2);
      font-size: var(--text-size-5);
    }

    .current-page {
      color: var(--grey3);
    }

    .next-page {
      color: var(--grey4);
    }
  }

  a {
    text-decoration: none;
    color: var(--brand2);
  }

  @media (min-width: 760px) {
    width: 100%;
    height: 66px;

    flex-direction: row;
    justify-content: center;
    padding: 80px 0;

    button {
      display: none;
    }

    a {
      margin: 0 51px;
    }
  }
`;
