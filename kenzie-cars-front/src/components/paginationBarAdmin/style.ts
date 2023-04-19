import styled from "styled-components";

export const BarAdmin = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--brand2);
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 66px;

    flex-direction: row;
    justify-content: center;
    padding: 100px 0;

    a {
      margin: 0 51px;
    }
  }
`;

export const StyledDivPages = styled.div`
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
`;

// export const
// export const
