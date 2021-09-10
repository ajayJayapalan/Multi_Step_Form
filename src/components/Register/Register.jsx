import React from "react";
import BackgroundClip from "../UI/BackgroundClip";
import { Container, Paper } from "@material-ui/core";
import LogoHeader from "../UI/LogoHeader";



function Register() {
  return (
    <div>
      <BackgroundClip />
      <Container>
        <Paper>
          <LogoHeader />
        </Paper>
      </Container>
    </div>
  );
}

export default Register;
