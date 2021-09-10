import React from "react";
import { Box, Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginInputField from "./../../UI/LoginInputField";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockRoundedIcon from "@material-ui/icons/LockRounded";

function CompanyInfo(props) {
  let schema = yup.object().shape({
    companyName: yup.string().required("Company Name is required"),
    location: yup.string().required("Location is requried"),
    email: yup.string().email().required("Email is required"),
  });

  const { control, handleSubmit } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    props.handleSubmit(data);
  };

  return (
    <Box paddingBottom="5%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="companyName"
          defaultValue=""
          render={({
            field: { onChange, value, onBlur },
            fieldState: { error },
          }) => (
            <LoginInputField
              style={{ width: "40%" }}
              id="companyName"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Company Name"
              IconComponent={AccountCircleIcon}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />
        <Box display="flex" width="100%">
          <Controller
            control={control}
            name="location"
            defaultValue=""
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => {
              return (
                <LoginInputField
                  style={{ width: "100%" }}
                  id="location"
                  value={value}
                  type="text"
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Location"
                  IconComponent={LockRoundedIcon}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="companyMail"
            defaultValue=""
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => {
              return (
                <LoginInputField
                  style={{ width: "100%" }}
                  id="email"
                  value={value}
                  type="email"
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Company Email"
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
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default CompanyInfo;
