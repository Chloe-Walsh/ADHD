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
                border: `2px solid ${props.hoverTextColor}`
              }
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
              vertical: "center",
              horizontal: "left"
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "right"
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
                opacity: 0.8
              }
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
              vertical: "center",
              horizontal: "left"
            }} transformOrigin={{
            vertical: "center",
            horizontal: "right"
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
      <Box sx={{ display: "grid", justifyContent: "right", marginTop: "50px" }}>
        <IntuitiveButton
          text="This is not a good colour for a positive action button. It looks like you shouldn't click on it. The font is somewhat hard to read."
          bgColor={midGrey}
          textColor="black"
          isContained
          hoverBackgroundColor={lightGrey}
          hoverTextColor={midGrey}
        >
          Yes
        </IntuitiveButton>
        <IntuitiveButton
          text="This looks non-clickable, so probably not best for a submit button. "
          bgColor={lightGrey}
          textColor={midGrey}
          isContained
          hoverBackgroundColor={midOrange}
          hoverTextColor="white"
        >
          submit
        </IntuitiveButton>
        <IntuitiveButton
          text="This could be used for a back button or neutral. Best not to use it for a positive button of continuing"
          bgColor="white"
          textColor={midGrey}
          isOutline
          hoverBackgroundColor="white"
          hoverTextColor={midOrange}
        >
          Continue
        </IntuitiveButton>
        <IntuitiveButton
          text="This button could work for a negative action, if there is also a positive action button then this should be outlined instead."
          bgColor={midOrange}
          textColor="white"
          isContained
          hoverBackgroundColor={lightGrey}
          hoverTextColor={midGrey}
        >
          No
        </IntuitiveButton>
        <IntuitiveButton
          text="This button could work, although if it is the primary button it would be better if it was filled and not just outlined."
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
      <Box sx={{
        display: "flex", justifyContent: "right"
      }}>
        <Box
          sx={{
            textAlign: "right",
            maxWidth: "700px",
            border: "4px solid #f66500",
            paddingTop: "20px",
            paddingBottom: "20px",
            marginBottom: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
            fontSize: "1.2rem",
          }}
        ><>
          <Typography component="span">
          <Typography   component="span" sx={{ cursor: "wait" }}>
            Clear{" "}</Typography>
            <Typography   sx={{ display: "inline", textDecoration: "underline", cursor: "pointer",  }}>
              links
            </Typography>{" "}
            underlined words, and{" "}
            <Tooltip title="This is not the helpful tooltip">
              <Typography  sx={{ display: "inline", cursor: "help" }}>helpful tooltips</Typography>
            </Tooltip>{" "}
            create a <Typography
            sx={{ display: "inline", cursor: "not-allowed"}}>friendly</Typography>{" "}
            website experience. They simplify the{" "}
            <Link  href="/#decisions" underline="none" color="black" sx={{ cursor: "none" }}>
              navigation
            </Link>{" "}
            and help with{" "}
            <Tooltip title="The link is in the word navigation">
              <Typography   variant="body1" sx={{ display: "inline", cursor: "help"}}>understanding</Typography>
            </Tooltip>{" "}
            the content.
          </Typography>
          </>
        </Box>
      </Box>
    </>
  );
}

export function IntuitivePage() {
  let titleColor = "#f55200";
  let backgroundColor = "white";

  return (
    <Page id="intuitive" backgroundColor={backgroundColor}>
      <PageTitle isRight color={titleColor}>Intuitive</PageTitle>
      <Box pb="40px" sx={{ textAlign: "right", display: "flex", alignContent: "right" }}>
        <Typography variant="body1" sx={{  }}>
          Intuitive web design is important as the focus is on experience of the people using it, making it easy to
          understand, navigate and interact with.
          Maintaining consistent layouts is one thing that can help users engage with the content without the need for
          extensive guidance or instructions.
        </Typography>
      </Box>
      <LinkTools />
      <IntuitiveButtonsGroup />
    </Page>
  );
}
