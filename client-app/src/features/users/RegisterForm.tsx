import { ErrorMessage, Form, Formik } from "formik";
import { useStore } from "../../app/stores/Store";
import { Button, Header } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";
import ValidationError from "../errors/ValidationError";

const RegisterForm = () => {
  const { userStore } = useStore();
  const validationSchema = Yup.object({
    displayName: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  });
  return (
    <Formik
      initialValues={{
        displayName: "",
        username: "",
        email: "",
        password: "",
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore.register(values).catch((error) => setErrors({ error: error }))
      }
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form
          className="ui form error"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Header
            as="h2"
            content="Sign up to Reactivities"
            color="teal"
            textAlign="center"
          />
          <MyTextInput placeholder="Display Name" name="displayName" />
          <MyTextInput placeholder="Username" name="username" />
          <MyTextInput placeholder="Email" name="email" />
          <MyTextInput placeholder="Password" name="password" type="password" />
          <ErrorMessage
            name="error"
            render={() => <ValidationError errors={errors.error} />}
          />
          <Button
            positive
            content="Register"
            type="submit"
            fluid
            disabled={!isValid || !dirty || isSubmitting}
            loading={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
};

export default observer(RegisterForm);
