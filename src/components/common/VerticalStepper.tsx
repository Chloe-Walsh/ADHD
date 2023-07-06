import {
  Typography,
  Box,
  Stepper,
  Step,
  Button,
  StepButton,
  StepContent,
  StepLabel,
  Paper,
  Checkbox,
} from "@mui/material";
import * as React from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup(props: {
  // value: any;
  // setValue: any;
  // label: string;
}) {
  const [value, setValue] = React.useState("");

  // const handleChange = (event: any) => {
  //   props.setValue(event.target.value);
  // };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Colour</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        // onChange={handleChange}
        onChange={() => null}
      >
        <FormControlLabel value="red" control={<Radio />} label="Red" />
        <FormControlLabel value="blue" control={<Radio />} label="Blue" />
        <FormControlLabel value="yellow" control={<Radio />} label="Yellow" />
      </RadioGroup>
    </FormControl>
  );
}

const steps = [
  {
    label: "Hue",
    description: `Choose a hue for the button`,
  },
  {
    label: "Shade",
    description: "Pick a shade",
  },
  {
    label: "Tint",
    description: `Select a tint`,
  },
  {
    label: "Tone",
    description: `Choose a tone`,
  },
];

const stepStyle = {
  backgroundColor: "#ECECEC",
  padding: 2,
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "warning.main",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "warning.main",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "secondary.main",
      fontSize: "2rem",
    },
    "& .MuiStepConnector-line": {
      borderColor: "secondary.main",
    },
  },
};

export function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState("");

  const handleNext = () => {
    // Only enable the next button if a value has been chosen
    if (value === "") {
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical" sx={stepStyle}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <RowRadioButtonsGroup />
                <div>
                  <Button
                    variant="contained"
                    disabled={value === ""}
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Next" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            All colour decisions have been done. Shape is next.{" "}
          </Typography>
          <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
            Back
          </Button>
        </Paper>
      )}
    </Box>
  );
}
