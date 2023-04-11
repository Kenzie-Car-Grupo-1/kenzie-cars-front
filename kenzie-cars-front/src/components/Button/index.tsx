import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  fontColor?: string;
  buttonSize: "big" | "medium";
  borderColor?: string;
  backgroundColorHover?: string;
  borderColorHover?: string;
  fontColorHover?: string;
}

const Button = ({
  children,
  backgroundColor,
  fontColor,
  buttonSize,
  borderColor,
  backgroundColorHover,
  borderColorHover,
  fontColorHover,
  ...rest
}: iButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      buttonSize={buttonSize}
      fontColor={fontColor}
      borderColor={borderColor}
      backgroundColorHover={backgroundColorHover}
      borderColorHover={borderColorHover}
      fontColorHover={fontColorHover}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
