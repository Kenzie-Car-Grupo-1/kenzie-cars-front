import { InputHTMLAttributes } from "react";
import { StyledInput } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  fontColor?: string;
  backgroundColorHover?: string;
}

const Input = ({
  backgroundColor,
  fontColor,
  backgroundColorHover,
  ...rest
}: IInputProps) => {
  return (
    <StyledInput
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      backgroundColorHover={backgroundColorHover}
      {...rest}
    />
  );
};

export default Input;
