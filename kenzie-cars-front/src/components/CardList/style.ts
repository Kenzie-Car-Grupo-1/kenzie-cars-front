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

    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 72px 48px;
    margin-bottom: 224px;

    position: static;
    right: 0;
  }
`;
