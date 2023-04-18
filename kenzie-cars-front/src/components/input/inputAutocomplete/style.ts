import styled from "styled-components";

export const StyledDivAutoComplete = styled.div`
  font-family: var(--font-family-3);
  font-weight: 400;
  font-size: 14px;

  position: relative;
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    color: var(--grey2);
    position: absolute;

    z-index: 50;
    background-color: var(--grey6);
    width: 100%;
    border-radius: 8px;
    top: 58px;
    border: var(--grey5) solid 1px;
  }
  li {
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: var(--brand2);
    }
  }
`;
