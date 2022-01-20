import React from "react";
import { Button } from "@mui/material";

export const CustomButton = ({
  width,
  green,
  blue,
  handleClick = () => {},
  children,
  redirect,
  disabled,
}) => {
  const palette = {
    green: "#3BAF6A",
    blue: "#3B93AF",
    common: "#26313A",
  };

  const buttonColor =
    (green && palette.green) || (blue && palette.blue) || palette.common;

  const sx = {
    textTransform: "none",
    fontSize: 13,
    width,
    borderRadius: 20,
    background: buttonColor,
    color: "white",
    "&:hover": {
      backgroundColor: buttonColor,
    },
  };

  return (
    <Button
      disabled={disabled}
      variant="contained"
      onClick={handleClick}
      redirect={redirect}
      sx={sx}
    >
      {children}
    </Button>
  );
};
