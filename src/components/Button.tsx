import React from "react";

interface ButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
  className?: string;
  styleName?: string;
  type: "button" | "submit";
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  styleName = "",
  type = "button",
  backgroundColor = "white",
}) => {
  const buttonStyle = { backgroundColor };

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      style={buttonStyle}
    >
      <span className={styleName}>{label}</span>
    </button>
  );
};

export default Button;
