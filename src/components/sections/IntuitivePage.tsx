import { Typography, Box, Button, createTheme, ThemeProvider, ButtonBase, Link, Tooltip, Popover } from "@mui/material";
import { Page } from "@/components/common/Page";
import { PageTitle } from "@/components/common/PageTitle";
import { PageContent } from "@/components/common/PageContent";
import React from "react";

export function IntuitiveButton(props: {
  children: any;
  bgColor: string;
  textColor: string;
  isOutline?: boolean;
  isContained?: boolean;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  text: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {props.isOutline ? (
        <>
          <Button
            onClick={handleClick}
            disableElevation
            size="large"
            variant="outlined"
            sx={{
              height: "50px",
              width: "180px",
              backgroundColor: props.bgColor,
              color: props.textColor,
              border: `2px solid ${props.textColor}`,
              marginTop: "10px",
              marginBottom: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: props.hoverBackgroundColor,
                color: props.hoverTextColor,
                border: `2px solid ${props.hoverTextColor}`,
              },
            }}
          >
            {props.children}
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Typography sx={{ p: 2 }}>{props.text}</Typography>
          </Popover>
        </>
      ) : (
        <>
          {" "}
          <Button
            onClick={handleClick}
            disableElevation
            size="large"
            variant="contained"
            sx={{
              height: "50px",
              width: "180px",
              backgroundColor: props.bgColor,
              color: props.textColor,
              marginTop: "10px",
              marginBottom: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: props.hoverBackgroundColor,
                color: props.hoverTextColor,
                opacity: 0.8,
              },
            }}
          >
            {props.children}
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Typography sx={{ p: 2 }}>{props.text}</Typography>
          </Popover>
        </>
      )}
    </>
  );
}

export function IntuitiveButtonsGroup() {
  let lightGrey = "#d0d0d0";
  let midGrey = "#7a7a7a";
  let darkGrey = "#545454";
  let lightOrange = "#ff832c";
  let midOrange = "#f66500";
  let darkOrange = "#c75200";

  return (
    <>
      <Box sx={{ display: "grid", justifyContent: "left", marginTop: "50px" }}>
        <IntuitiveButton
          text="This button is obviously not a good button for yes."
          bgColor={midGrey}
          textColor="black"
          isContained
          hoverBackgroundColor={lightGrey}
          hoverTextColor={midGrey}
        >
          Yes
        </IntuitiveButton>
        <IntuitiveButton
          text="Probably not this one."
          bgColor={lightGrey}
          textColor={midGrey}
          isContained
          hoverBackgroundColor={midOrange}
          hoverTextColor="white"
        >
          submit
        </IntuitiveButton>
        <IntuitiveButton
          text="What are you? a clown?"
          bgColor="white"
          textColor={midGrey}
          isOutline
          hoverBackgroundColor="white"
          hoverTextColor={midOrange}
        >
          Continue
        </IntuitiveButton>
        <IntuitiveButton
          text="Sure, if you are a fool."
          bgColor={midOrange}
          textColor="white"
          isContained
          hoverBackgroundColor={lightGrey}
          hoverTextColor={midGrey}
        >
          No
        </IntuitiveButton>
        <IntuitiveButton
          text="Okay, go ahead."
          bgColor="white"
          textColor={midOrange}
          isOutline
          hoverBackgroundColor="white"
          hoverTextColor={midGrey}
        >
          Next
        </IntuitiveButton>
      </Box>
    </>
  );
}

export function LinkTools() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "700px",
          border: "4px solid #f66500",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginBottom: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Typography component="span" sx={{ cursor: "auto", fontSize: "18px" }}>
          Clear{" "}
          <Typography sx={{ display: "inline", textDecoration: "underline", cursor: "pointer", fontSize: "18px" }}>
            links
          </Typography>{" "}
          underlined words, and{" "}
          <Tooltip title="This is not the helpful tooltip">
            <Typography sx={{ display: "inline", cursor: "grab", fontSize: "18px" }}>helpful tooltips</Typography>
          </Tooltip>{" "}
          create a <Typography sx={{ display: "inline", cursor: "not-allowed", fontSize: "18px" }}>friendly</Typography>{" "}
          website experience. They simplify the{" "}
          <Link href="/#decisions" underline="none" color="black" sx={{ cursor: "none", fontSize: "18px" }}>
            navigation
          </Link>{" "}
          and help with{" "}
          <Tooltip title="The link is in the word navigation">
            <Typography sx={{ display: "inline", cursor: "help", fontSize: "18px" }}>understanding</Typography>
          </Tooltip>{" "}
          the content.
        </Typography>
      </Box>
    </>
  );
}

export function IntuitivePage() {
  let titleColor = "#f55200";
  let backgroundColor = "white";

  return (
    <Page id="intuitive" backgroundColor={backgroundColor}>
      <PageTitle color={titleColor}>Intuitive</PageTitle>
      <PageContent>
        Designing websites with intuitive features, users can quickly find what they&apos;re looking for, complete tasks
        efficiently, and engage with the content without the need for extensive guidance or instructions.
      </PageContent>
      <LinkTools />
      <IntuitiveButtonsGroup />
    </Page>
  );
}
