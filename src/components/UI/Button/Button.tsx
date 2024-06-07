import type { DOMAttributes } from "react";
import styles from "./Button.module.scss";

export type ButtonType = "button" | "submit" | "reset";

interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  icon?: string
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  type?: ButtonType
  style?: React.CSSProperties
}

export const Button: React.FC<IButtonProps> = ({ children, className, icon, ...props }) => {

  return (
    <button
      {...props}
      className=
      {`
        ${styles.button} ${icon ? styles.button__icon : styles.button__text} 
        ${props.disabled ? styles.button__disabled : ''}
        ${className ? className : ''}
      `}
    >
      {icon
        ? <img src={icon} alt='button-icon' />
        : children
      }
    </button>
  );
};