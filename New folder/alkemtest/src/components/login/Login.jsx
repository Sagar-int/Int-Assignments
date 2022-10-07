/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import axios from "axios";
// import AXIOS from "../../../shared/api.js";

import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { setupUserLogin } from "../../redux/actions/auth.action";

export const Login = () => {
  const { auth_token } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("ReduxData===>", auth_token);

  const initialValues = {
    email: "",
    password: "",
  };

  const userSchema = Yup.object().shape({
    email: Yup.string().email("invalid email address").required("Required"),
    password: Yup.string().required("Please provide a valid password"),
  });

  const handleInputChange = (name, event, setFieldValue) => {
    const { value } = event.target;
    switch (name) {
      case "email":
        setFieldValue(name, value);

      case "password":
        setFieldValue(name, value);
    }
  };

  const handleUserLogin = (values, actions) => {
    axios
      .post(
        "https://alkemapi.indusnettechnologies.com/api/employee/login",
        values
      )
      .then((res) => {
        actions.resetForm();
        dispatch(setupUserLogin(res.data));
        actions.setSubmitting(false);
		alert("Login Successfully")
        navigate("/dashboard");
      })
      .catch((err) => {
        actions.setSubmitting(false);
        console.log("err---->>>>", err);
        actions.setErrors(err.response.data.errors);
      });
  };

  return (
    <div className="login_form">
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleUserLogin}
      >
        {({
          setFieldValue,
          values,
          touched,
          handleBlur,
          isValid,
          errors,
          isSubmitting,
          actions,
        }) => {
          return (
            <FormikForm>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Your mail id"
                  value={values.email}
                  onBlur={handleBlur}
                  isValid={!errors.email && touched.email}
                  isInvalid={errors.email && touched.email}
                  onChange={(e) => handleInputChange("email", e, setFieldValue)}
                />

                {errors.email && touched.email ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                ) : (
                  <Form.Control.Feedback></Form.Control.Feedback>
                )}
              </Form.Group>

              <br />
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onBlur={handleBlur}
                  isValid={!errors.password && touched.password}
                  isInvalid={errors.password && touched.password}
                  onChange={(e) =>
                    handleInputChange("password", e, setFieldValue)
                  }
                />

                {errors.password && touched.password ? (
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                ) : (
                  <Form.Control.Feedback></Form.Control.Feedback>
                )}
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </FormikForm>
          );
        }}
      </Formik>
    </div>
  );
};
