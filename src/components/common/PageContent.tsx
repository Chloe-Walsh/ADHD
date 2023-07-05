import { Box, Typography } from "@mui/material";
import { relative } from "path";

export function PageContent(props: { children: any }) {
  return (
    <Box maxWidth="55%" position="relative" pb={2} mb="20px">
      <Typography component="span">{props.children}</Typography>
    </Box>
  );
}
