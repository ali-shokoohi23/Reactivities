import { useField } from "formik";
import DatePicker, { DatePickerProps } from "react-datepicker";
import { FormField, Label } from "semantic-ui-react";

const MyDateInput = (props: Partial<DatePickerProps>) => {
  const [field, meta, helpers] = useField(props.name!);
  return (
    <FormField error={meta.touched && !!meta.error}>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value : any) => helpers.setValue(value)}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default MyDateInput;
