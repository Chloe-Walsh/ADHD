import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  styled,
  Paper,
  MobileStepper,
  useTheme,
  Button,
  Alert,
  AlertTitle,
  Collapse,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Page } from "@/components/common/Page";
import { PageTitle } from "@/components/common/PageTitle";
import { PageContent } from "@/components/common/PageContent";
import { keyframes } from "@emotion/react";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

export function Slideshow() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Box sx={{ margin: "0 auto", overflow: "hidden", maxWidth: "500px" }}>
      <Box
        sx={{ whiteSpace: "nowrap", transition: "ease 1000ms" }}
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <Box
            sx={{
              display: "inline-block",
              height: "400px",
              width: "100%",
              borderRadius: "40px",
            }}
            className="slide"
            key={index}
            style={{ backgroundColor }}
          ></Box>
        ))}
      </Box>
      <Box sx={{ textAlign: "center" }} className="slideshowDots">
        {colors.map((_, idx) => (
          <Box
            sx={{
              display: "inline-block",
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              margin: "15px 7px 0px",
              backgroundColor: "#c4c4c4",
            }}
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}

// const moveAnimation = keyframes`
//   to {
//     transform: translateX(-100%);
//   }
// `;

// const Bar = styled(Box)(({ theme }) => ({
//   left: 0,
//   right: 0,
//   maxWidth: "100wh",
//   padding: theme.spacing(2),
//   backgroundColor: "green",
// }));

// const BarContent = styled(Typography)({
//   display: "block",
//   width: "100vw",
//   transform: "translateX(100%)",
//   fontSize: "25px",
//   fontFamily: "sans-serif",
//   fontWeight: "700",
//   animation: `${moveAnimation} 20s linear infinite`,
//   whiteSpace: "nowrap",
//   overflow: "visible",
//   animationPlayState: "paused",
// });

// export function AnimatedBar() {
//   return (
//     <Box sx={{ position: "absolute", left: 0 }}>
//       <Bar>
//         <BarContent variant="body1">
//           This is text that is moving and distracting because it is on a moving banner. This is distracting. This is
//           distracting. This is distracting. This is distracting.
//         </BarContent>
//       </Bar>
//     </Box>
//   );
// }

const moveAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Bar = styled(Box)(({ theme }) => ({
  position: "sticky",
  bottom: 0,
  left: 0,
  width: "100%",
  padding: theme.spacing(2),
  backgroundColor: "green",
  zIndex: 9999,
}));

const BarContent = styled(Typography)({
  display: "block",
  whiteSpace: "nowrap",
  overflow: "hidden",
  fontSize: "20px",
  fontWeight: 600,
  animation: `${moveAnimation} 10s linear infinite`,
  animationPlayState: "paused",
});

export function AnimatedBar() {
  return (
    <Box sx={{ position: "relative" }}>
      <Bar>
        <BarContent variant="body1">
          This is text that is moving and distracting because it is on a moving banner. This is distracting. This is
          distracting. This is distracting. This is distracting.
        </BarContent>
      </Bar>
    </Box>
  );
}

export function DistractionsPage() {
  let titleColor = "#00850d";
  let backgroundColor = "lightgrey";

  return (
    <>
      <Page id="distractions" backgroundColor={backgroundColor}>
        <PageTitle color={titleColor}>Distractions</PageTitle>
        <PageContent>
          Designing websites with intuitive features, users can quickly find what they&apos;re looking for, complete
          tasks efficiently, and engage with the content without the need for extensive guidance or instructions.
        </PageContent>
      </Page>
    </>
  );
}
