import React from "react";
import { Box, Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginInputField from "./../../UI/LoginInputField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockRoundedIcon from "@material-ui/icons/LockRounded";

function UserLogin(props) {
  let schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().min(4,"Minimum 4 characters required").required("Password is requried"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const { control, handleSubmit } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    props.handleNext(data)
  };

  return (
    <Box paddingBottom="5%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="username"
          defaultValue={props.value.username}
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <LoginInputField
              style={{ width: "40%" }}
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
        <Box display="flex" width="100%">
          <Controller
            control={control}
            name="password"
            defaultValue={props.value.password}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => {
              return (
                <LoginInputField
                  style={{ width: "100%" }}
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
          <Controller
            control={control}
            name="confirmPassword"
            defaultValue={props.value.password}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => {
              return (
                <LoginInputField
                  style={{ width: "100%" }}
                  id="confirmPassword"
                  value={value}
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Confirm Password"
                  IconComponent={LockRoundedIcon}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
          />
        </Box>
        <Box mx={5} textAlign="right">

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={props.btnClass}
          >
Next
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default UserLogin;
