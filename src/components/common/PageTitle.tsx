import { Box, Typography } from "@mui/material";

export function PageTitle(props: { children: any; color: any; isRight? : boolean }) {
  return (
    <Box>
      <Typography variant="h2" color={props.color} sx={{textAlign: props.isRight? "right" : "left"}}>
        {props.children}
      </Typography>
    </Box>
  );
}
