import { Box, Container } from "@mui/material";

export function Page(props: any) {
  return (
    <div id={props.id}>
      <Container>
        <Box
          sx={{
            paddingTop: "50px",
            bgcolor: props.backgroundColor,
            minHeight: "100vh",
            maxWidth: "100vw",
            height: "100%",
            flex: "1",
            marginBottom: "0",
          }}
        >
          {props.children}
        </Box>
      </Container>
    </div>
  );
}
