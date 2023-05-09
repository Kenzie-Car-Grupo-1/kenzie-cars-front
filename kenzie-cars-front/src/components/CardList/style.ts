import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  padding: 0 25px;
  margin-top: 72px;
  margin-bottom: 96px;

  position: relative;
  overflow-x: scroll;
  gap: 12px;

  @media (min-width: 1024px) {
    width: 80%;
    margin-top: 60px;

    gap: 72px 48px;
    margin-bottom: 82px;

    position: static;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 40px;
    grid-row-gap: 90px;
    grid-area: auto;
    height: max-content;
  }
`;

export const NoListDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: var(--font-family-1);
    font-weight: var(--font-weight-2);
    font-size: var(--text-size-4);

    width: 100%;
    text-align: center;
  }

  @media (min-width: 700px) {
    width: 100%;
  }
`;
