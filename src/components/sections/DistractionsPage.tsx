import React, { useState } from "react";
import {
  Box,
  Typography,
  styled,
} from "@mui/material";
import { Page } from "@/components/common/Page";
import { PageTitle } from "@/components/common/PageTitle";
import { PageContent } from "@/components/common/PageContent";
import { keyframes } from "@emotion/react";




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
