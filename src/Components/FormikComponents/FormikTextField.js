import React from "react";
import { useField } from "formik";
import { TextField } from "@mui/material";

export const FormikTextField = (props) => {
  const [field, meta] = useField(props);

  return (
    <TextField
      id={props.id ? props.id : field.name}
      name={field.name}
      label={props.label}
      type={props.type ? props.type : "text"}
      fullWidth
      value={field.value ?? ""}
      onChange={field.onChange}
      error={(meta.touched && Boolean(meta.error)) || Boolean(props.apiError)}
      helperText={meta.touched && meta.error}
      variant={props.variant ? props.variant : "outlined"}
      size={props.size ? props.size : "medium"}
      InputProps={{
        disabled: props.readOnly ?? false,
      }}
    />
  );
};
