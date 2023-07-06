import { Typography, Box } from "@mui/material";
import { Page } from "@/components/common/Page";
import { PageTitle } from "@/components/common/PageTitle";
import { PageContent } from "@/components/common/PageContent";

export function AdhdTitlePage() {
  let titleColor = "#e800c1";
  let backgroundColor = "#FFFFFF";

  return (
    <>
      <Page id="adhd" backgroundColor={backgroundColor}>
        <Typography
          variant="h1"
          pb="40px"
          mt="50px"
          letterSpacing="0.01px"
          lineHeight={1}
          color={titleColor}
        >
          Attention Deficit Hyperactivity Disorder
        </Typography>
        <PageContent>
          <Box sx={{
            borderLeft: `4px solid ${titleColor}`,
            maxWidth: "700px",
            paddingLeft: "30px",
            marginTop: "90px"
          }}>
            <Typography variant="h5" color={titleColor} pb="10px" lineHeight="1" mt={0} pt={0}>About
            </Typography>
            <Typography variant="body1" fontWeight={400} fontSize="1.1rem" display="flex">
              Cognitive and neurological conditions can have a big impact on
              the experience people have online. It&apos;s important to focus on making websites easy to use for
              everyone.

            </Typography>
          </Box>
        </PageContent>
      </Page>
      <Box mb="80px" sx={{
        height: "100px",
        backgroundColor: "black",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      }}>
        <Typography sx={{ color: "white", fontSize: "1.3rem" }}>This is an ongoing project to showcase web accessibility
          in an interactive way.</Typography>
      </Box>
    </>
  );
}
