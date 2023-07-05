import { Typography } from "@mui/material";
import { Page } from "@/components/common/Page";
import { PageTitle } from "@/components/common/PageTitle";
import { PageContent } from "@/components/common/PageContent";

export function AdhdTitlePage() {
  let titleColor = "#e800c1";
  let backgroundColor = "#FFFFFF";

  return (
    <Page id="adhd" backgroundColor={backgroundColor}>
      <Typography
        pb={3}
        pt={2}
        fontSize="90px"
        fontWeight="bold"
        letterSpacing="0.01px"
        lineHeight={1}
        color={titleColor}
      >
        Attention Deficit Hyperactive Disorder
      </Typography>
      <PageContent>
        The internet is an essential part of our lives. Cognitive and neurological conditions can have a big impact on
        the experience people have online. It&apos;s important to focus on making websites easy to use for everyone.{" "}
        <Typography fontSize="30px" fontWeight={600} color={titleColor} pb={1} pt={2}>
          Why?
        </Typography>
        The internet shapes our future and should be a welcoming space for everyone to participate and benefit.
      </PageContent>
    </Page>
  );
}
