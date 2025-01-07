import React from "react";

interface ButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
