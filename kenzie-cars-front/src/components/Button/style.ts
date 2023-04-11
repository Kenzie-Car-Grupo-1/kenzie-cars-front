import styled from "styled-components";

interface iButtonStyledProps {
  backgroundColor?: string;
  buttonSize: "big" | "medium";
  fontColor?: string;
  borderColor?: string;
  backgroundColorHover?: string;
  borderColorHover?: string;
  fontColorHover?: string;
}

export const StyledButton = styled.button<iButtonStyledProps>`
  font-weight: 600;
  background-color: ${(props) => props.backgroundColor || "#5126EA"};
  color: ${(props) => props.fontColor || "white"};
  font-size: ${(props) => (props.buttonSize === "big" ? "16px" : "14px")};
  padding: ${(props) =>
    props.buttonSize === "big" ? "14px 20px" : "9px 20px"};
  border-radius: 4px;
  border: 1.5px solid ${(props) => props.borderColor || "transparent"};
  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.backgroundColorHover || props.backgroundColor};
    border-color: ${(props) => props.borderColorHover || props.borderColor};
    color: ${(props) => props.fontColorHover || props.fontColor};
    ${(props) =>
      !props.borderColorHover &&
      !props.backgroundColorHover &&
      `filter: brightness(120%);`}
  }

  &:disabled {
    background-color: #ced4da;
    color: #ffffff;
    cursor: not-allowed;
  }
`;
