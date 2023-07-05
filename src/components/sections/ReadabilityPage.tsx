import {
  Box,
  Slider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Button,
  SvgIcon,
  ToggleButton,
  ToggleButtonGroup,
  Switch,
  Styled,
} from "@mui/material";
import { Page } from "@/components/common/Page";
import { PageTitle } from "@/components/common/PageTitle";
import * as React from "react";
import { useState, useEffect, useRef, createContext } from "react";
import { PageContent } from "../common/PageContent";

export function ReadabilityParagraph(props: {
  children: any;
  maxWidth?: any;
  typeface: string;
  casing: string;
  fontsize: string;
}) {
  return (
    <Box
      sx={{
        width: props.maxWidth !== null ? props.maxWidth + "%" : "600px",
        height: "auto",
      }}
    >
      <Typography fontFamily={props.typeface} sx={{ textTransform: props.casing }} fontSize={props.fontsize}>
        {props.children}
      </Typography>
    </Box>
  );
}

export function SliderReadability(props: { setWidth: any }) {
  return (
    <Box sx={{ width: "100%" }} paddingTop={3}>
      <Slider
        defaultValue={85}
        onChange={(event, newValue) => props.setWidth(newValue)}
        aria-labelledby="readability-slider"
        color="secondary"
      />
    </Box>
  );
}

export function ButtonGroup(props: {
  value: any;
  setValue: any;
  label: string;
  items: Array<{ key: string; value: any }>;
  id: string;
}) {
  return (
    <Box sx={{ maxwidth: "400px" }}>
      <FormControl sx={{ minWidth: "150px" }} size="small">
        <InputLabel id={props.id + "-select-label"}>{props.label}</InputLabel>
        <Select
          variant="outlined"
          labelId={props.id + "-select-label"}
          id={props.id + "-select"}
          value={props.value}
          label={props.label}
          onChange={(event) => props.setValue(event.target.value)}
          sx={{ border: "green", "& .MuiSelect-outlined": { borderColor: "red" } }}
        >
          {props.items.map((item) => (
            <MenuItem key={item.key} value={item.value}>
              {item.key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export function WidthShow(props: { children: any; width: number }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  const getTextWidthInPixels = (ref: HTMLSpanElement) => ref.getBoundingClientRect().width;

  useEffect(() => {
    setTextWidth(getTextWidthInPixels(spanRef.current!));
  }, [spanRef]);

  return (
    <>
      <Box display="block">
        <span
          ref={spanRef}
          contentEditable
          suppressContentEditableWarning
          onInput={() => setTextWidth(getTextWidthInPixels(spanRef.current!))}
        >
          {props.children}
        </span>
      </Box>
      <DimensionLineSVG text={textWidth} width={props.width} />
    </>
  );
}

export function DimensionLineSVG(props: { text: number; width: number }) {
  return (
    <SvgIcon sx={{ width: props.text }}>
      <svg viewBox="0 0 568 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16.2295H566M2 30V0M566 30V0" stroke="#0500FF" strokeWidth={props.width} />
      </svg>
    </SvgIcon>
  );
}

export function HeirarchyTextButton(props: { value: any; setValue: any }) {
  const [checked, setChecked] = React.useState(true);
  const handleToggleChange = (event: React.MouseEvent<HTMLElement>, newValue: boolean) => {
    props.setValue(newValue);
    setChecked(!checked);
  };

  return (
    <Box sx={{ paddingLeft: "30px" }}>
      <Switch
        checked={checked}
        sx={{
          color: "pink",
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "blue",
          },
          "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
            backgroundColor: "lightblue",
          },
        }}
        onChange={handleToggleChange}
      />
      {/* <ToggleButtonGroup
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
        value={props.value}
        exclusive
        onChange={handleToggleChange}
      >
        <ToggleButton
          sx={{
            width: "100px",
            backgroundColor: "pink",
            color: "yellow",
            "&:hover": { backgroundColor: "orange" },
            "& MuiButtonBase-root": { backgroundColor: "green", color: "red" },
          }}
          value={true}
        >
          {props.items[0].key}
        </ToggleButton>
        <ToggleButton
          sx={{ width: "100px", backgroundColor: "purple", color: "grey", "&:hover": { backgroundColor: "peach" } }}
          value={false}
        >
          {props.items[1].key}
        </ToggleButton>
      </ToggleButtonGroup> */}
    </Box>
  );
}

export function HeirarchyTextLine(props: { children: any; isHeading?: boolean; color: string; size: string }) {
  const isHeadingBig = props.isHeading;

  return (
    <Box sx={{ height: "50px", paddingTop: "10px" }}>
      <Typography
        color={props.isHeading ? props.color : "black"}
        // sx={{ ...(is ? { fontSize: props.size } : { variant: "body1" }) }}
        variant={isHeadingBig ? props.size : "body1"}
        lineHeight={props.isHeading ? "15px" : 3}
      >
        {props.children}
      </Typography>
    </Box>
  );
}

export function ReadabilityPage() {
  const [contentWidth, setContentWidth] = useState(85);
  const [typeface, setTypeface] = React.useState("Monospace");
  const [casing, setCasing] = React.useState("Default");
  const [fontsize, setFontsize] = React.useState("24px");

  const [headingTitle, setHeadingTitle] = React.useState(true);

  let titleColor = "blue";

  return (
    <Page id="readability" backgroundColor="white">
      <HeirarchyTextLine size="h2" color={titleColor} isHeading={headingTitle}>
        Readability
      </HeirarchyTextLine>
      <PageContent>
        There are many things that affect readability and these things affect it and there are some things you can do
        heirarchy, font, font size, the spacing. Reading and somewhat colour and contrast if you could pick a colour and
        choose everything words.
        <Box>
          <HeirarchyTextLine size="h3" color={titleColor} isHeading={headingTitle}>
            Heirarchy
          </HeirarchyTextLine>
          Subtext, if there is no heirarchy then where do you read and what random if there. Reading and somewhat colour
          and contrast if you could pick a colour and choose everything words.
          <Box mt={2} mb={1} sx={{ display: "flex", alignItems: "center" }}>
            <Typography pl={2} sx={{ borderLeft: "5px solid blue", fontWeight: "500" }} lineHeight={2}>
              See what it is like when there is no heirarchy
            </Typography>
            <HeirarchyTextButton value={headingTitle} setValue={setHeadingTitle} />
          </Box>
        </Box>
        <Box>
          <HeirarchyTextLine size="h3" color={titleColor} isHeading={headingTitle}>
            Line Length
          </HeirarchyTextLine>
          There are a lot of studies with varying results regarding line length from 50 characters to anything below 80
          to up to 100. Below is an example of how the width may affect your reading comprehension there are faster but
          not necessarily easier if the lines are longer.
        </Box>
      </PageContent>
      <WidthShow width={7}>This sentence has a total of 43 characters.</WidthShow>
      <WidthShow width={5}>The total amount of characters used for this sentence is 60.</WidthShow>
      <Box display="flex" justifyContent="left" flexGrow={2} flexDirection="row" gap="10px" marginTop={4}>
        <ButtonGroup
          value={typeface}
          setValue={setTypeface}
          label="Typeface"
          id="typeface"
          items={[
            { key: "Serif", value: "Serif" },
            { key: "Sans Serif", value: "Sans-serif" },
            { key: "Monospace", value: "Monospace" },
          ]}
        />
        <ButtonGroup
          value={casing}
          setValue={setCasing}
          label="Case"
          id="case"
          items={[
            { key: "Lowercase", value: "Lowercase" },
            { key: "Uppercase", value: "Uppercase" },
            { key: "Default", value: "Default" },
          ]}
        />
        <ButtonGroup
          value={fontsize}
          setValue={setFontsize}
          label="Font Size"
          id="fontsize"
          items={[
            { key: "Small", value: "12px" },
            { key: "Medium", value: "16px" },
            { key: "Large", value: "24px" },
          ]}
        />
      </Box>
      <Box display="flex" justifyContent={"space-around"}>
        <Box flexGrow={2}>
          <SliderReadability setWidth={setContentWidth} />
          <ReadabilityParagraph maxWidth={contentWidth} typeface={typeface} casing={casing} fontsize={fontsize}>
            The width of a paragraph is important for readability. If it&apos;s too wide, you might accidentally read
            the same line twice because your eyes lose their place between lines. So, it&apos;s better to avoid overly
            wide paragraphs. On the other hand, if a paragraph is too short, it disrupts the reading flow as your eyes
            constantly have to jump to the next line. Therefore, finding the right balance in paragraph length is key
            for a better reading experience.
          </ReadabilityParagraph>
        </Box>
      </Box>
    </Page>
  );
}
