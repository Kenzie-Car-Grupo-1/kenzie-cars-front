import styled from "styled-components";

export const Bar = styled.div`
  width: 372px;
  height: 179px;
  padding: 48px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .div-pages {
    display: flex;
    align-items: center;
    justify-content: center;

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

    a {
      margin: 0 51px;
    }
  }
`;
