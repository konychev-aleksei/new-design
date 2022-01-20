import React from "react";
import { TextField } from "@material-ui/core";

export const CustomTextField = ({ value, label, name, formik, disabled }) => {
  return (
    <TextField
      variant="outlined"
      value={value}
      label={label}
      onChange={(e) => formik.setFieldValue(name, e.target.value)}
      size="small"
      disabled={disabled}
    />
  );
};
