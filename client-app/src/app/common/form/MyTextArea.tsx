import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
  rows: number;
}

const MyTextArea = (props: Props) => {
  const [field, meta] = useField(props.name);
  return (
    <FormField error={meta.touched && !!meta}>
      <label>{props.label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
};

export default MyTextArea;
