import React from "react";

export enum ButtonVarient {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DISABLED = "disabled",
  ENABLED = "enabled",
  THIRD = "third",
}

export interface ButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
  varient?: ButtonVarient;
  isDisabled?: boolean;
  hasSvg?: boolean;
  image?: string;
  imageAlt?: string;
}
