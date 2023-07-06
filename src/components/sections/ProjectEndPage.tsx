import { Typography, Box, Button } from "@mui/material";
import { Page } from "@/components/common/Page";
import { PageTitle } from "@/components/common/PageTitle";
import { PageContent } from "@/components/common/PageContent";
import Link from "next/link";

function Ideas(props: { children: any, title: string }) {
  return (
    <Box sx={{
      maxWidth: "500px",
      paddingTop: "5px",
      paddingBottom: "20px",
      borderTop: "1.5px solid black",
      minHeight: "150px",
      marginBottom: "20px"
    }}>
      <Typography variant="h4" sx={{
        fontSize: "1.6rem", fontWeight: "500"
      }}>{props.title}</Typography>
      <Typography variant="body1" pt="5px" sx={{ fontWeight: "400", maxWidth: "700px" }}>{props.children}</Typography>
    </Box>
  );
}

export function ProjectEndPage() {
  let titleColor = "black";
  let backgroundColor = "white";

  return (
    <>
      <Page id="project" backgroundColor={backgroundColor}>
        <PageTitle color={titleColor}>Project</PageTitle>
        <PageContent>
          This project is a work in progress. As someone with ADHD who has an interest in art, design, and
          programming, I enjoy creating websites that are accessible and follow
          good design principles. I am always learning and doing my best to stay updated with new information in these
          areas. I look forward to updating this website along the way.
          {" "}
          <Typography fontSize="30px" fontWeight={600} color={titleColor} pb={1} pt={2}>

          </Typography>
          <Box sx={{ height: "30px" }}></Box>
          <Box sx={{}}>
            <Ideas title="Distractions">Websites that have a lot of pop ups, whether it be for cookies or to sign up.
              Autoplay videos or audio when the page loads. Carousels that move automatically with no option to
              pause. Flashing colours or text on the page. </Ideas>
            <Ideas title="Time Constraints">Forms or processes with a time limit that do not give the option to pause or
              extend the time. </Ideas>
            <Ideas title="Colours">Different ways people interpret colours. Using patterns in combination with colours
              to represent
              actions. How important the contrast in colours is for reading and actions on a page. </Ideas>
          </Box>
        </PageContent>
      </Page>
      <Box sx={{
        height: "150px",
        backgroundColor: "black",
        maxWidth: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}><Typography sx={{ fontSize: "1.1rem", maxWidth: "600px", textAlign: "center", color: "white" }}>Hi there! I
        enjoyed making a start to this project and I look forward to adding more to it.{" "}
        <Link style={{ color: "white" }} href="https://github.com/Chloe-Walsh">
          Here
        </Link> is a link to my Github.</Typography></Box>
    </>
  );
}
