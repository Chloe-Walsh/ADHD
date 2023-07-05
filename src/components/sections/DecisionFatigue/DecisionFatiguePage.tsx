import React, { useState } from "react";
import { Typography, Box, Button, LinearProgress, ButtonGroup } from "@mui/material";
import { Page } from "@/components/common/Page";
import { PageTitle } from "@/components/common/PageTitle";
import { PageContent } from "@/components/common/PageContent";
import { CalculateLightness, GenerateHexCodes, HexToHsl } from "./ColourConversion";
import { wrap } from "module";

const stepNames = ["hue", "shade", "tint", "tone"];

function SelectionStep(props: { step: number; currentStepData: string; hexCodes: Array<string>; UpdateStep: any }) {
  return (
    <Box
      sx={{
        paddingTop: "30px",
        paddingBottom: "10px",
        minHeight: "250px",
        color: "#740b9c",
        width: "100%",
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: "20px", fontWeight: "600" }}>
        Choose a {stepNames[props.step]}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingBottom: "30px",
            paddingTop: "30px",
            alignContent: "stretch",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {props.hexCodes.map((hex) => {
            const isSelected = props.currentStepData === hex;

            return (
              <>
                <Box
                  sx={{
                    alignItems: "stretch",
                    alignContent: "stretch",
                    position: "relative",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    key={hex}
                    onClick={() => props.UpdateStep(hex)}
                    sx={{
                      backgroundColor: hex,
                      minWidth: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      // border: isSelected ? "4px solid green" : "0px solid white",
                      borderWidth: "4px",
                      borderStyle: "solid",
                      borderColor: hex,
                      boxShadow: isSelected ? "inset 0 0 0 3px white" : "",
                    }}
                  >
                    <Typography display="flex" fontSize="40px" color="white">
                      {isSelected ? "\u274B" : null}
                    </Typography>
                  </Box>
                  <Typography marginTop="5px" textAlign="center" fontSize="12px" color="grey">
                    {isSelected ? (
                      <Typography marginTop="5px" textAlign="center" fontSize="12px" fontWeight="700" color="#740b9c">
                        {hex.toUpperCase()}
                      </Typography>
                    ) : (
                      hex.toUpperCase()
                    )}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>
        {/* <Typography> {props.currentStepData ? props.currentStepData.toUpperCase() + " is selected" : null}</Typography> */}
      </Box>
    </Box>
  );
}

const buttonStepNames = ["style", "shape", "size"];

const buttonOptions = [
  [
    { name: "Filled", style: { color: "#FFFFFF" }, props: { variant: "contained" } },
    {
      name: "Outline",
      style: {
        backgroundColor: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#FFFFFF",
          opacity: 0.8,
        },
      },
      props: { variant: "outlined" },
    },
  ],
  [
    { name: "Square", style: { borderRadius: "0px" }, props: {} },
    { name: "Curved", style: { borderRadius: "12px" }, props: {} },
    { name: "Rounded", style: { borderRadius: "100px" }, props: {} },
  ],
  [
    { name: "Small", style: { width: "60px" }, props: { size: "small" } },
    { name: "Medium", style: { width: "100px" }, props: { size: "medium" } },
    { name: "Large", style: { width: "150px" }, props: { size: "large" } },
  ],
];

function ButtonSelectionStep(props: {
  step: number;
  stepData: Array<{ name: string; style: any; props: any }>;
  color: string;
  UpdateStep: any;
}) {
  const previousStepValues: any = { style: {}, props: {} };

  for (let i = 0; i < props.step; i++) {
    previousStepValues["style"] = {
      ...previousStepValues["style"],
      ...props.stepData[i]["style"],
    };
    previousStepValues["props"] = {
      ...previousStepValues["props"],
      ...props.stepData[i]["props"],
    };
  }

  if (props.step === 3) {
    return (
      <Box sx={{ paddingTop: "30px", paddingBottom: "10px", minHeight: "250px" }}>
        <Typography sx={{ textAlign: "center", fontSize: "20px", fontWeight: "600", color: "#740b9c" }}>
          Congratulations clown *honk honk*, you have completed the design of the button.
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center" mb="30px" mt="20px" sx={{ padding: "20px" }}>
          <Button
            disableElevation
            {...previousStepValues.props}
            sx={{
              padding: "10px",
              backgroundColor: props.color,
              borderColor: props.color,
              border: `2px solid ${props.color}`,
              color: props.color,
              ...previousStepValues.style,
              "&:hover": {
                backgroundColor: props.color,
                border: `2px solid ${props.color}`,
                opacity: 0.8,
                ...previousStepValues.style["&:hover"],
              },
            }}
          >
            Button
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ paddingTop: "30px", paddingBottom: "10px", minHeight: "250px" }}>
      <Typography sx={{ textAlign: "center", fontSize: "20px", fontWeight: "600", color: "#740b9c" }}>
        Choose a {buttonStepNames[props.step]}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="30px"
        mt="20px"
        alignContent="stretch"
        flexWrap="wrap"
        flexShrink="1"
        flexGrow="1"
        sx={{ paddingTop: "20px", paddingBottom: "10px" }}
      >
        {buttonOptions[props.step].map((buttonOption) => {
          const isSelected = props.stepData[props.step].name === buttonOption.name;

          return (
            <Button
              disableElevation
              size="large"
              key={buttonOption.name}
              onClick={() => props.UpdateStep(buttonOption)}
              {...previousStepValues.props}
              {...buttonOption.props}
              sx={{
                width: "100px",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginLeft: "20px",
                marginRight: "20px",
                marginBottom: "1px",
                backgroundColor: props.color,
                borderColor: props.color,
                border: `2px solid ${props.color}`,
                color: props.color,
                ...previousStepValues.style,
                ...buttonOption.style,
                "&:hover": {
                  backgroundColor: props.color,
                  border: `2px solid ${props.color}`,
                  opacity: 0.8,
                  ...previousStepValues.style["&:hover"],
                  ...buttonOption.style["&:hover"],
                },
              }}
            >
              {buttonOption.name}
            </Button>
          );
        })}
      </Box>
      <Typography textAlign="center" display="block" color="#9E17CF">
        {props.stepData[props.step].name && "You have selected " + props.stepData[props.step].name}
      </Typography>
      <Typography>{HexToHsl}</Typography>
    </Box>
  );
}

function ColourStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepData, setStepData] = useState(["", "", "", ""]);
  const [buttonData, setButtonData] = useState([
    { name: "", style: {}, props: {} },
    { name: "", style: {}, props: {} },
    { name: "", style: {}, props: {} },
  ]);
  const stepHexCodes = GenerateHexCodes(stepData);

  const UpdateStep = (newStep: number) => {
    if (0 <= newStep && newStep < 8) {
      if (currentStep < 4) {
        const newStepData = [...stepData];

        for (let i = newStep + 1; i < newStepData.length; i++) {
          newStepData[i] = "";
        }
        setStepData(newStepData);
      }
      setCurrentStep(newStep);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setStepData(["", "", "", ""]);
    setButtonData([
      { name: "", style: {}, props: {} },
      { name: "", style: {}, props: {} },
      { name: "", style: {}, props: {} },
    ]);
  };

  const UpdateStepData = (newHex: string) => {
    const newStepData = [...stepData];
    newStepData[currentStep] = newHex;
    setStepData(newStepData);
  };

  const UpdateButtonData = (newButton: any) => {
    const newButtonData = [...buttonData];
    newButtonData[currentStep - 4] = {
      name: newButton.name,
      style: { ...newButton.style },
      props: { ...newButton.props },
    };
    setButtonData(newButtonData);
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        width: "100%",
        backgroundColor: "#740b9c09",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "40px",
      }}
    >
      <Box sx={{ width: "70%", maxWidth: "770px" }}>
        <LinearProgress
          variant="determinate"
          value={(currentStep / 7) * 100}
          sx={{
            height: 8,
            borderRadius: 2,
            backgroundColor: "#edbdff",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#740b9c",
            },
          }}
        />
        {/* TODO: Have this be a non arbiturary value */}
        <Box sx={{ maxWidth: "100%" }}>
          {currentStep < 4 ? (
            <SelectionStep
              step={currentStep}
              currentStepData={stepData[currentStep]}
              hexCodes={stepHexCodes[currentStep]}
              UpdateStep={UpdateStepData}
            />
          ) : (
            <ButtonSelectionStep
              step={currentStep - 4}
              stepData={buttonData}
              color={stepData[3]}
              UpdateStep={(newSetting: string) => UpdateButtonData(newSetting)}
            />
          )}
          {/* Next and Back buttons */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {currentStep != 0 ? (
              <Button
                sx={{
                  width: "150px",
                  mr: "10px",
                  color: "#9E17CF",
                  borderColor: "#9E17CF",
                  "&:hover": {
                    backgroundColor: "#8710b310",
                    borderColor: "#740b9c",
                  },
                }}
                size="large"
                variant="outlined"
                onClick={() => UpdateStep(currentStep - 1)}
              >
                Back
              </Button>
            ) : (
              <Button
                sx={{
                  width: "150px",
                  mr: "10px",
                  color: "#9E17CF",
                  borderColor: "#9E17CF",
                  "&:hover": {
                    backgroundColor: "#8710b310",
                    borderColor: "#740b9c",
                  },
                }}
                disabled
                size="large"
                variant="outlined"
                onClick={() => UpdateStep(currentStep - 1)}
              >
                Back
              </Button>
            )}
            {currentStep !== 7 ? (
              <Button
                sx={{
                  width: "150px",
                  ml: "10px",
                  backgroundColor: "#9E17CF",
                  "&:hover": {
                    backgroundColor: "#740b9c",
                  },
                }}
                disableElevation
                variant="contained"
                size="large"
                disabled={
                  (currentStep < 4 && !stepData[currentStep]) || (currentStep >= 4 && !buttonData[currentStep - 4].name)
                }
                onClick={() => UpdateStep(currentStep + 1)}
              >
                {currentStep === 6 ? "Finish" : "Next"}
              </Button>
            ) : null}
            {currentStep == 7 ? (
              <Button
                sx={{
                  width: "150px",
                  ml: "10px",
                  color: "#9E17CF",
                  borderColor: "#9E17CF",
                  "&:hover": {
                    backgroundColor: "#8710b310",
                    borderColor: "#740b9c",
                    opacity: 0.8,
                  },
                }}
                disableElevation
                variant="outlined"
                size="large"
                onClick={handleRestart}
              >
                START OVER
              </Button>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const colorOptions = [
  { label: "Red", value: "#CD0000" },
  { label: "Orange", value: "#FF4D00" },
  { label: "Yellow", value: "#FFC700" },
  { label: "Green", value: "#00CC14" },
  { label: "Blue", value: "#0149FF" },
  { label: "Purple", value: "#A800E6" },
  { label: "Pink", value: "#E600DE" },
];

const buttonTypes = [
  { name: "Square", props: { isOutline: false, variant: "contained", corner: "square", borderRadius: "0px" } },
  { name: "Curved", props: { isOutline: false, variant: "contained", corner: "curve", borderRadius: "10px" } },
  { name: "Rounded", props: { isOutline: false, variant: "contained", corner: "round", borderRadius: "40px" } },
  { name: "Outlined Square", props: { isOutline: true, variant: "outlined", corner: "square", borderRadius: "0px" } },
  { name: "Outlined Curved", props: { isOutline: true, variant: "outlined", corner: "curve", borderRadius: "10px" } },
  { name: "Outlined Rounded", props: { isOutline: true, variant: "outlined", corner: "round", borderRadius: "40px" } },
];

export default function CustomButtonDesigner() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedButtonType, setSelectedButtonType] = useState("");
  const [selectedButtonVariant, setSelectedButtonVariant] = useState("");
  const [selectedButtonCorner, setSelectedButtonCorner] = useState("");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedButtonType("");
  };

  const handleButtonTypeChange = (buttonType: any, buttonVariant: string, buttonCorner: string) => {
    setSelectedButtonType(buttonType);
    setSelectedButtonVariant(buttonVariant);
    setSelectedButtonCorner(buttonCorner);
  };

  const handleFinish = () => {
    if (selectedColor && selectedButtonType) {
      console.log("Selected color:", selectedColor);
      console.log("Selected button type:", selectedButtonType);
      // Perform further actions or submit the selection
    } else {
      // Display an error or prompt to select color and button type
      console.log("Please select a color and button type");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "30px",
        paddingTop: "30px",
        backgroundColor: "#740b9c09",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: "700px",
          padding: "20px",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }} variant="h3" color="#740b9c" pb={2} pt={2}>
          Choose a colour
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          {colorOptions.map((colorOption, index) => (
            <Button
              disableElevation
              key={index}
              sx={{
                borderRadius: "0",
                width: "77px",
                height: "70px",
                color: "#FFFFFF00",
                backgroundColor: colorOption.value,
                opacity: selectedColor === colorOption.value ? "1" : "1",
                "&:hover": {
                  backgroundColor: colorOption.value,
                  borderColor: "#740b9c",
                },
              }}
              onClick={() => handleColorChange(colorOption.value)}
            >
              {colorOption.label}
            </Button>
          ))}
        </Box>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "600", color: !selectedColor ? "lightgrey" : "#740b9c" }}
          variant="h3"
          pb={2}
          pt={2}
        >
          Pick a style
        </Typography>

        <Box
          mt={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "30px",
            margin: "0px",
          }}
        >
          {buttonTypes.map((buttonType, index) => (
            <Button
              disableElevation
              key={index}
              {...(buttonType.props.isOutline ? { variant: "outlined" } : { variant: "contained" })}
              sx={{
                fontWeight: "600",
                width: "160px",
                height: "50px",
                backgroundColor: buttonType.props.isOutline ? "#FFFFFF00" : selectedColor,
                color: buttonType.props.isOutline ? selectedColor : "white",
                opacity: selectedColor ? "1" : "0.5",
                borderRadius: buttonType.props.borderRadius,
                filter: selectedButtonType && buttonType.name !== selectedButtonType ? "opacity(30%)" : "none",
                border: buttonType.props.isOutline ? `2px solid ${selectedColor}` : "#FFFFFF00",
                "&:hover": {
                  backgroundColor: buttonType.props.isOutline ? `${selectedColor}30` : `${selectedColor}CC`,
                  border: buttonType.props.isOutline ? `2px solid ${selectedColor}CC` : `0px`,
                },
              }}
              onClick={() => handleButtonTypeChange(buttonType.name, buttonType.props.variant, buttonType.props.corner)}
              disabled={!selectedColor}
            >
              Button
            </Button>
          ))}
        </Box>

        <>
          {selectedButtonType && (
            <Box>
              <Typography variant="body1" mb={3}>
                Congratulations, you just picked a button in 1/10th of the time nice one.
              </Typography>
              <Button
                disableElevation
                {...(selectedButtonVariant === "contained" ? { variant: "contained" } : { variant: "outlined" })}
                style={{
                  fontWeight: "600",
                  width: "160px",
                  height: "50px",
                  backgroundColor: selectedButtonVariant === "outlined" ? "#FFFFFF00" : selectedColor,
                  borderRadius:
                    selectedButtonCorner === "curve" ? "15px" : selectedButtonCorner === "round" ? "40px" : "0px",
                  border: selectedButtonVariant === "outlined" ? `2px solid ${selectedColor}CC` : `0px`,
                  color: selectedButtonVariant === "outlined" ? selectedColor : "white",
                }}
                onClick={handleFinish}
              >
                Nice Choice
              </Button>
            </Box>
          )}
        </>
      </Box>
    </Box>
  );
}

export function DecisionFatiguePage() {
  let titleColor = "#740b9c";
  let backgroundColor = "white";

  return (
    <Page id="decisions" backgroundColor={backgroundColor}>
      <PageTitle color={titleColor}>Decision Fatigue</PageTitle>
      <PageContent>
        Decision fatigue occurs when users are overwhelmed by too many choices or the process to make the decision is
        too complex. This can make users feel mentally tired and frustrated. To help reduce decision fatigue the
        decisions should be simple and the process straighforward.
      </PageContent>
      <Box sx={{ backgroundColor: "white" }}>
        <Typography variant="h3" color={titleColor}>
          Complex
        </Typography>
        <ColourStepper />
        <Typography variant="h3" color={titleColor}>
          Simple
        </Typography>
        <CustomButtonDesigner />
      </Box>
    </Page>
  );
}
