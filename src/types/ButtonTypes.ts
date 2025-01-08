import React from "react";

export enum ButtonVarient {
  primary = "primary",
  secondary = "secondary",
  disabled = "disabled",
  enabled = "enabled",
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
