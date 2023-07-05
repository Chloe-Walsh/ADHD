import * as React from "react";
import { Box, Slider } from "@mui/material";

export function SliderReadability(props: { setWidth: any }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        defaultValue={85}
        onChange={(event, newValue) => props.setWidth(newValue)}
        aria-labelledby="readability-slider"
      />
    </Box>
  );
}

export { Slider };
