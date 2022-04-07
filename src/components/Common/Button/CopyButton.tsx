import { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  label?: string;
  type?: "submit" | "reset" | "button";
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    variant = "default",
    size = "md",
    color = "darkYellow",
    label,
    disabled,
    ...restProps
  } = props;
  return (
    <ButtonElement
      variant={variant}
      size={size}
      color={color}
      ref={ref}
      {...restProps}
    >
      {label}
    </ButtonElement>
  );
});

const ButtonElement = styled.button<IButtonProps>`
  ${(props) =>
    props.size === "md" &&
    `
      height: 25px;
      padding: 0 12px;
      font-size: 1rem;
      border-radius: 6px;
    `};

  ${(props) =>
    props.variant === "default" &&
    props.color === "darkYellow" &&
    !props.disabled &&
    `
      color: #fff;
      background-color: #f2b600;
      &:hover {
        background: #f7d794;
      }
      &:active {
        background: #f7d794;
      }
    `};
  text-align: center;
  font-weight: 200;
  transition: 100ms ease-out;
`;
export default Button;
