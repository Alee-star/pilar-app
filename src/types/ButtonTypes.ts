import React from "react";

export enum ButtonVarient {
  black = "black",
  white = "white",
  disabled = "disabled",
  enabled = "enabled",
}

export interface ButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: string;
  varient?: ButtonVarient;
  isDisabled?: boolean;
  hasSvg?: boolean;
  svgSrc?: string;
  svgAlt?: string;
}
