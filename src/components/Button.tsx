import React from "react";
import clsx from "clsx";
import { ButtonProps, ButtonVarient } from "../types/ButtonTypes";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  varient = ButtonVarient.primary,
  isDisabled,
  image,
  imageAlt,
}) => {
  return (
    <button
      className={clsx(
        "flex h-min items-center justify-center p-0.5 text-center font-medium rounded-lg",
        {
          "text-gray-900 border border-gray-300 hover:bg-gray-100":
            varient === ButtonVarient.primary,
          "border-transparent text-white bg-gray-800 hover:bg-gray-900":
            varient === ButtonVarient.secondary,
          "bg-white opacity-50 cursor-not-allowed border border-gray-900":
            varient === ButtonVarient.disabled,
          "text-gray-900 border border-gray-900":
            varient === ButtonVarient.enabled,
        }
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className={clsx("flex items-center rounded-md text-sm px-4 py-2")}>
        {image && <img src={image} alt={imageAlt} />}
        <span className={clsx(image ? "pl-3" : "", "text-xs sm:text-sm")}>
          {label}
        </span>
      </span>
    </button>
  );
};

export default Button;
