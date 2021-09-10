import React from "react";

import LoginInputField from "../UI/LoginInputField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// .matches('/^[a-z0-9]+$/i',"Must be alphanumeric")

function LoginForm() {
  let schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is requried"),
  });

  const { control, handleSubmit } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller
        control={control}
        name="username"
        defaultValue=""
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => (
          <LoginInputField
            id="username"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder="Username"
            IconComponent={AccountCircleIcon}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({
          field: { onChange, value, onBlur },
          fieldState: { error },
        }) => {
          return (
            <LoginInputField
              id="password"
              value={value}
              type="password"
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Password"
              IconComponent={LockRoundedIcon}
              error={!!error}
              helperText={error ? error.message : null}
            />
          );
        }}
      />
      {/* <LoginInputField
        value="ajayjaymon"
        name="username"
        placeholder="Username"
        IconComponent={AccountCircleIcon}
      /> */}
      {/* <LoginInputField
        value="password"
        type="password"
        name="password"
        placeholder="Password"
        IconComponent={LockRoundedIcon}
      /> */}
      <Box mx={5}>
        <Button type="submit" color="primary" fullWidth variant="contained">
          Login
        </Button>
      </Box>
    </form>
  );
}

export default LoginForm;
