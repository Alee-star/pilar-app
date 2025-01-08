import React from "react";
import { ButtonProps, ButtonVarient } from "../types/ButtonTypes";

const getButtonClasses = (varient: ButtonVarient): string => {
  switch (varient) {
    case ButtonVarient.PRIMARY:
      return "text-gray-900 border border-gray-300 hover:bg-gray-100";
    case ButtonVarient.SECONDARY:
      return "border-transparent text-white bg-gray-800 hover:bg-gray-900";
    case ButtonVarient.DISABLED:
      return "bg-white opacity-50 cursor-not-allowed border border-gray-900";
    case ButtonVarient.ENABLED:
      return "text-gray-900 border border-gray-900";
    default:
      return "text-gray-900 border border-gray-300 hover:bg-gray-100";
  }
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  varient = ButtonVarient.PRIMARY,
  isDisabled,
  image,
  imageAlt,
}) => {
  const buttonClasses = `flex h-min items-center justify-center p-0.5 text-center font-medium rounded-lg ${getButtonClasses(
    varient
  )}`;
  const labelClasses = image ? "pl-3 text-xs sm:text-sm" : "text-xs sm:text-sm";

  return (
    <button className={buttonClasses} onClick={onClick} disabled={isDisabled}>
      <span className="flex items-center rounded-md text-sm px-4 py-2 pl-3">
        {image && <img src={image} alt={imageAlt} />}
        <span className={labelClasses}>{label}</span>
      </span>
    </button>
  );
};

export default Button;
