import React from "react";
import BackgroundClip from "../UI/BackgroundClip";
import { Container, Paper } from "@material-ui/core";
import LogoHeader from "../UI/LogoHeader";
import HorizontalLinearStepper from "./HorizontalLinearStepper";



function Register() {
  return (
    <div>
      <BackgroundClip />
      <Container>
        <Paper>
          <LogoHeader />
          <HorizontalLinearStepper/>
        </Paper>
      </Container>
    </div>
  );
}

export default Register;
