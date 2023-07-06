import { Box, Typography } from "@mui/material";
import { relative } from "path";

export function PageContent(props: { children: any} ) {
  return (
    <Box maxWidth="650px" position="relative" pb="1.5rem" mb="1rem">
      <Typography variant="body1" component="span" fontSize="1.1rem">{props.children}</Typography>
    </Box>
  );
}
