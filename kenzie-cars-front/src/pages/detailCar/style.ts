import styled from "styled-components";

export const StyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 52px 16px;

  background-color: var(--grey8);

  @media (min-width: 700px) {
    /* height: calc(100vh - 80px - 140px); */
    display: flex;
    flex-direction: row;

    background-color: var(--grey8);
  }
`;

export const StyledDivBackground = styled.div`
  position: absolute;
  top: 0px;
  z-index: 0;

  @media (min-width: 700px) {
    /* width: 100%;
    display: flex;
    flex-direction: row;
    min-height: 482px;
    background-color: var(--brand1); */
  }
`;
