import React from "react";
import { Link, withRouter } from "react-router-dom";
import * as PATH_URL from "../../constants/path";
import { Formik } from "formik";
import * as yup from "yup";
import { withFirebase } from "../../hoc/Firebase";
import { compose } from "recompose";

const signUpSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().required()
});

const SignUp = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const SignUpFormBase = props => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirm: ""
      }}
      validationSchema={signUpSchema}
      onSubmit={({ username, email, password, passwordConfirm }) => {
        props.firebase
          .doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            console.log(authUser);
            props.history.push(PATH_URL.HOME);
          })
          .catch(error => {
            console.error(error);
          });
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              value={values.username}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
            />
            {errors.username && <span>{errors.username}</span>}
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <input
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        );
      }}
    </Formik>
  );
};

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={PATH_URL.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

withRouter(withFirebase(SignUpFormBase));

export default SignUp;

export { SignUpForm, SignUpLink };
