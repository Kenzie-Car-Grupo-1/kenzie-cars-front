import styled from "styled-components";

interface IInputStyledProps {
  backgroundColor?: string;
  fontColor?: string;
  backgroundColorHover?: string;
}

export const StyledInput = styled.input<IInputStyledProps>`
  font-family: var(--font-family-3);
  font-weight: 400;
  font-size: 16px;
  background-color: ${(props) => props.backgroundColor || "var(--grey9)"};
  color: ${(props) => props.fontColor || "var(--grey2)"};
  border-radius: 4px;
  border: 1.5px solid #e9ecef;
  transition: background-color 0.2s;
  padding: 0px 16px;
  height: 48px;
  width: 141px;

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.backgroundColorHover || "var(--grey8)"};
  }

  &::placeholder {
    color: ${(props) => props.fontColor || "var(--grey3)"};
  }
  &:focus:valid {
    outline: none;
    border: 1.5px solid #5126ea;
  }

  &:disabled {
    background-color: #ced4da;
    color: #ffffff;
  }
`;
