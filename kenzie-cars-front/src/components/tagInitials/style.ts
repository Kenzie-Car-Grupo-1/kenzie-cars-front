import styled from "styled-components";

interface IPropsStyledTag {
  color: string;
}

export const StyledTag = styled.span<IPropsStyledTag>`
  display: flex;
  margin-right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;

  font-family: var(--font-family-3);
  font-size: var(--text-size-8);
  font-weight: var(--font-weight-3);
  color: var(--white-fixed);
  background-color: var(--random-${(props) => props.color});
`;
