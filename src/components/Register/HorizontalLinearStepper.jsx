import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
//import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { Box, Container } from "@material-ui/core";
import UserLogin from "./Register Contents/UserLogin";
import PersonalInfo from "./Register Contents/PersonalInfo";
import CompanyInfo from "./Register Contents/CompanyInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    width: "80px",
    marginRight: theme.spacing(3),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["User Login", "Personal Info", "Company Info"];
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const intialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    companyName: "",
    location: "",
    companyMail: "",
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [regData, setRegData] = React.useState(intialState);

  const steps = getSteps();

  // Content
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <UserLogin
            value={regData}
            btnClass={classes.button}
            activeStep={activeStep}
            handleNext={handleNext}
          />
        );
        case 1:
          return (
            <PersonalInfo
            value={regData}
            btnClass={classes.button}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
        case 2:
          return (
            <CompanyInfo
            value={regData}
            btnClass={classes.button}
            activeStep={activeStep}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return "Unknown step";
    }
  }

  React.useEffect(() => {
    console.log("effect: ", regData);
  }, [regData]);

  const handleNext = (data) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setRegData((prevState) => {
      return { ...prevState, ...data };
    });
    console.log("handleNext", data);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (data) => {
    setRegData((prevState) => {
      return { ...prevState, ...data };
    });
    //
  };

  return (
    <div className={classes.root}>
      <Box paddingX="2%" marginBottom="2%">
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>
        <div>
          <Container className={classes.instructions}>
            {getStepContent(activeStep)}
            {/* <UserLogin
              btnClass={classes.button}
              activeStep={activeStep}
              handleBack={handleBack}
              handleFinish={lastStep ? handleSubmit : handleNext}
              finishLabel={lastStep ? "Submit" : "Next"}
            /> */}
          </Container>
          {/* <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={lastStep ? handleSubmit : handleNext}
              className={classes.button}
            >
             {lastStep ? <>Submit</> : <>Next</>}
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
