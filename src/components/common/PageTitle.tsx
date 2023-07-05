import { Box, Typography } from "@mui/material";

export function PageTitle(props: { children: any; color: any }) {
  return (
    <Box>
      <Typography variant="h2" color={props.color}>
        {props.children}
      </Typography>
    </Box>
  );
}
