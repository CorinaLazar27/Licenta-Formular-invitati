import React from "react";
import { useField } from "formik";
import { Rating } from "@mui/material";

export const FormikRatingField = (props) => {
  const [field, meta] = useField(props);

  return (
    <Rating
      name={field.name}
      value={field.value ?? 0}
      onChange={field.onChange}
    />
  );
};
