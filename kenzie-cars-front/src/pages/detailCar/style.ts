import styled from "styled-components";

export const StyleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  background-color: var(--grey8);

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;

    max-height: max-content;

    background-color: var(--brand1);
  }
`;
