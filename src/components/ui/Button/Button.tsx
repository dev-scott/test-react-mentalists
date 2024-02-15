"use client";

import React from "react";
import styles from "./button.module.css";
import { theme } from "@/utils/theme";

interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      style={{ backgroundColor: `${theme.palette.common.black}` }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
