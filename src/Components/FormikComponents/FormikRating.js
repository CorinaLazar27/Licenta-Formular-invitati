import React from "react";
import { useField } from "formik";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const FormikRatingField = (props) => {
  const [field, meta] = useField(props);

  return (
    <Rating
      name={field.name}
      value={field.value ?? 0}
      onChange={field.onChange}
      icon={<FavoriteIcon fontSize="inherit" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      sx={{
        color: "red",
      }}
    />
  );
};
