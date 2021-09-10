import React from "react";
import { Box, Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginInputField from "./../../UI/LoginInputField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockRoundedIcon from "@material-ui/icons/LockRounded";

function PersonalInfo(props) {
  let schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is requried"),
    age: yup.number().max(150).required("Age is required"),
  });

  const { control, handleSubmit } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    props.handleNext(data);
  };

  return (
    <Box paddingBottom="5%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="firstName"
          defaultValue={props.value.firstName}
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <LoginInputField
              style={{ width: "40%" }}
              id="firstName"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="First Name"
              IconComponent={AccountCircleIcon}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Box display="flex" width="100%">
          <Controller
            control={control}
            name="lastName"
            defaultValue={props.value.lastName}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => {
              return (
                <LoginInputField
                  style={{ width: "100%" }}
                  id="lastName"
                  value={value}
                  type="text"
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Last Name"
                  IconComponent={LockRoundedIcon}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="age"
            defaultValue={props.value.age}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => {
              return (
                <LoginInputField
                  style={{ width: "100%" }}
                  id="age"
                  value={value}
                  type="text"
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Age"
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
            disabled={props.activeStep === 0}
            onClick={props.handleBack}
            className={props.btnClass}
          >
            Back
          </Button>
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

export default PersonalInfo;
