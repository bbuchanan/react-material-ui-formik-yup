import React from "react";
import { Formik } from "formik";
import { Paper, withStyles } from "@material-ui/core";
import Form from "./form";
import * as Yup from "yup";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`
  },
  container: {
    maxWidth: "200px"
  }
});

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),

  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  password: Yup.string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),

  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

const inputForm = props => {
  const classes = props;
  const values = { name: "", email: "", password: "", confirmPassword: "" };

  return (
    <>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.Paper}>
          <h1>Form</h1>
          <Formik
            render={props => <Form {...props} />}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
            }}
            initialValues={values}
            validationSchema={validationSchema}
          />
        </Paper>
      </div>
    </>
  );
};

export default withStyles(styles)(inputForm);
