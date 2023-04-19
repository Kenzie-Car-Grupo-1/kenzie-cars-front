import { ForwardedRef, InputHTMLAttributes } from "react";
import { StyledInput } from "./style";
import React, { forwardRef } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
  fontColor?: string;
  backgroundColorHover?: string;
}

const Input = forwardRef(
  (
    { backgroundColor, fontColor, backgroundColorHover, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledInput
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        backgroundColorHover={backgroundColorHover}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Input;
