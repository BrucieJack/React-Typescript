import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";

export const TField: React.FC<FieldProps & TextFieldProps> = ({
  placeholder,
  field,
  type,
}) => {
  return <TextField placeholder={placeholder} {...field} type={type} />;
};
