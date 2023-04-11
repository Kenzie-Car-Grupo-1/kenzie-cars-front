import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-1);
  padding: 0 27px;

  h2 {
    font-weight: var(--font-weight-2);
    font-size: var(--text-size-4);
    line-height: 35px;
    color: #000000;
    margin-top: 32px;
  }
  ul {
    margin-top: 10px;
    padding: 10px;
  }

  li {
    font-weight: var(--font-weight-3);
    font-size: var(--text-size-6);
    color: var(--grey3);
    line-height: 25px;
  }
`;
