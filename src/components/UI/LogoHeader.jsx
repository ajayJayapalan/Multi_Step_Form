import {
  Box,
  Container,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  logoText: {
    fontWeight: 500,
  },
  img: {
    width: 100,
    height: "100%",
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function LogoHeader() {
  const classes = useStyle();
  return (
    <Box justifyContent="center" py={2}>
      <Container className={classes.flex}>
        <Paper elevation={0}>
          <img className={classes.img} src="./logo.jpg" alt="logo" />
        </Paper>
        <Typography className={classes.logoText} color="primary" variant="h4">
          SmartVending
        </Typography>
      </Container>
    </Box>
  );
}

export default LogoHeader;
