import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  padding: 0 25px;
  margin-top: 63px;
  margin-bottom: 96px;

  position: relative;
  overflow-x: scroll;
  gap: 12px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;

    gap: 72px 48px;
    margin-top: 60px;
    margin-bottom: 82px;
  }
`;

export const NoList = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  padding: 16px;

  h1 {
    font-family: var(--font-family-1);
    font-weight: var(--font-weight-2);
    font-size: var(--text-size-5);

    width: 100%;
    text-align: center;
  }
`;
