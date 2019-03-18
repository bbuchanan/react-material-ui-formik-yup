import React from "react";
import { Button, TextField } from "@material-ui/core";

const form = props => {
  const {
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleChange,
    handleSubmit,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    console.log(`name: ${name}, value: ${e}`);
    e.persist();
    handleChange(e);
    console.log(errors);
    setFieldTouched(name, true, false);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        helperText={touched.name ? errors.name : ""}
        onChange={e => change("name", e)}
        value={name}
        fullWidth
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        onChange={e => change("email", e)}
        value={email}
        fullWidth
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
        onChange={e => change("password", e)}
        fullWidth
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        helperText={touched.confirmPassword ? errors.confirmPassword : ""}
        onChange={e => change("confirmPassword", e)}
        value={confirmPassword}
        fullWidth
      />
      <Button type="submit" fullWidth disabled={!isValid} variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default form;
