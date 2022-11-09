import { Button } from "@mui/material";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { TField } from "../../components/TField";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface Values {
  login: string;
  password: string;
  email: string;
  date: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const TestForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ login: "", password: "", email: "", date: "" }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div>
            <Field
              name="login"
              placeholder="Login"
              type="text"
              component={TField}
            />
          </div>
          <div>
            <Field
              name="password"
              placeholder="Password"
              type="password"
              component={TField}
            />
          </div>
          <div>
            <Field
              name="email"
              placeholder="email"
              type="email"
              component={TField}
            />
          </div>
          <div>
            <Field
              name="date"
              placeholder="date"
              type="datetime-local"
              component={TField}
            />
          </div>
          <Button type="submit">submit</Button>
        </Form>
      )}
    </Formik>
  );
};
