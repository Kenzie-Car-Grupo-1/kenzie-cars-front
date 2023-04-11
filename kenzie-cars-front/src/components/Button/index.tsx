import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  fontColor?: string;
  buttonSize: "big" | "medium";
  borderColor?: string;
}

const Button = ({
  children,
  backgroundColor,
  fontColor,
  buttonSize,
  borderColor,
  ...rest
}: iButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      buttonSize={buttonSize}
      fontColor={fontColor}
      borderColor={borderColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
