import React from "react";

import { Container, makeStyles, Paper, Typography } from "@material-ui/core";

import BackgroundClip from "../UI/BackgroundClip";
import LogoHeader from "../UI/LogoHeader";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const useStyle = makeStyles({
  container: {
    marginTop: "10%",
    width: "25rem",
  },
  paper: {
    paddingBottom: "10%",
    margin: "0 auto",
  },
  joinNow: {
    marginTop: "5%",
  },
});

function Login() {
  const classes = useStyle();




  return (
    <>
      <BackgroundClip />
      <Container className={classes.container} maxWidth="sm">
        <Paper className={classes.paper}>
          <LogoHeader />
          <LoginForm />
          <Typography className={classes.joinNow} align="center">
            Not a memeber yet? <Link to="/register">Join Now!</Link>
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
