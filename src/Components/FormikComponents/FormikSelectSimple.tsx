import { FC } from "react";
import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";

interface FormikSelectSimpleProps {
    items: any[];
    label?: string;
    variant?: "standard" | "filled" | "outlined";
    name: string;
    size?: "medium" | "small";
    apiError?: string | null | undefined;
    id?: string;
    type?: string;
    readOnly?: boolean;
}

export const FormikSelectSimple: FC<FormikSelectSimpleProps> = ({ items, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <TextField
            select
            name={field.name}
            label={props.label}
            value={field.value ?? ''}
            onChange={field.onChange}
            error={meta.touched && (Boolean(meta.error) || Boolean(props.apiError))}
            helperText={meta.touched && meta.error}
            fullWidth
            size={props.size ?? "medium"}
            variant={props.variant ? props.variant : "outlined"}
            InputProps={{
                disabled: props.readOnly ?? false,
            }}
        >
            {items.map((item: any) => (
                <MenuItem key={item.value} value={item.value}>
                    {item.label}
                </MenuItem>
            ))}
        </TextField>
    );
};
