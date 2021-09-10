import { Box, InputAdornment, makeStyles, TextField } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";

const useStyle = makeStyles({
  box: {
    display: "flex",
    justifyContent: "center",
    padding: " 0 15%",
  },
  margin: {
    marginBottom: 30,
  },
});

function LoginInputField({ placeholder, IconComponent, error, ...rest }) {
  const classes = useStyle();

  const errorColor = error ? red[300] : "lightgray";

  return (
    <>
      <Box px={5} width="100%">
        <TextField
          {...rest}
          color="primary"
          error={ error ? true : false}
          className={classes.margin}
          placeholder={placeholder}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconComponent style={{ color: `${errorColor}` }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
}

export default LoginInputField;
