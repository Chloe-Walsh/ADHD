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
  Switch
  // Styled
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
        height: "auto"
      }}
    >
      <Typography variant="body2" fontFamily={props.typeface} sx={{ textTransform: props.casing }}
                  fontSize={props.fontsize}>
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
    <Box sx={{ maxWidth: "400px" }}>
      <FormControl sx={{ minWidth: "200px" }} size="small">
        <InputLabel id={props.id + "-select-label"}>{props.label}</InputLabel>
        <Select
          variant="outlined"
          labelId={props.id + "-select-label"}
          id={props.id + "-select"}
          value={props.value}
          label={props.label}
          onChange={(event) => props.setValue(event.target.value)}

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


export function HierarchyTextButton(props: { value: any; setValue: any }) {
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
            color: "blue"
          },
          "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
            backgroundColor: "lightblue"
          }
        }}
        onChange={handleToggleChange}
      />
    </Box>
  );
}

export function WidthShow(props: { children: any }) {
  return (
    <>
      <Box display="block" sx={{ paddingTop: "1px", paddingBottom: "20px" }}>
        <Box display="inline-block">
          <Typography sx={{ fontSize: "1.1rem" }}>
            <span>
            {props.children}
            </span>
          </Typography>
          <Box component="span" sx={{
            borderBottom: "4px solid blue",
            borderLeft: "4px solid blue",
            borderRight: "4px solid blue",
            height: "15px",
            width: "100%",
            display: "inline-block"
          }} />
        </Box>
      </Box>
    </>
  );
}

export function HierarchyTextLine(props: { children: any; isHeading?: boolean; color: string; size: string }) {
  const isHeadingBig = props.isHeading;

  return (
    <Box sx={{ height: "50px", paddingTop: "10px" }}>
      <Typography
        color={props.isHeading ? props.color : "black"}
        variant={isHeadingBig ? props.size : "body1"}
        lineHeight={props.isHeading ? "1rem" : "3rem"}
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
  const [fontsize, setFontsize] = React.useState("1.6rem");

  const [headingTitle, setHeadingTitle] = React.useState(true);

  let titleColor = "blue";

  return (
    <Page id="readability" backgroundColor="white">
      <Box pb="1rem" pt="1rem">
        <HierarchyTextLine size="h2" color={titleColor} isHeading={headingTitle}>
          Readability
        </HierarchyTextLine>
      </Box>
      <PageContent>
        There are many things that affect readability and these things affect it and there are some things you can do
        hierarchy, font, font size, the spacing. Reading and somewhat colour and contrast if you could pick a colour and
        choose everything words.
        <Box pt="15px">
          <HierarchyTextLine size="h3" color={titleColor} isHeading={headingTitle}>
            Hierarchy
          </HierarchyTextLine>
          Hierarchy in web design is how text is organised based on importance. It helps with readability and to
          understand the content better. It makes it easier to identify important information and navigate the content
          more efficiently.
          <Box mt="30px" mb="30px"
               sx={{ borderLeft: "5px solid blue", display: "flex", alignItems: "center", height: "30px" }}>
            <Typography pl="30px" sx={{ fontWeight: "500", fontSize: "1.2rem" }} lineHeight={1.2}>
              {headingTitle ? "Toggle the switch to turn off hierarchy" : "Toggle the switch to turn on hierarchy"}
            </Typography>
            <HierarchyTextButton value={headingTitle} setValue={setHeadingTitle} />
          </Box>
        </Box>
        <Box>
          <HierarchyTextLine size="h3" color={titleColor} isHeading={headingTitle}>
            Line Length
          </HierarchyTextLine>
          The line length in text can affect how easy it is to read. It&apos;s
          important to find the right balance in line length to make reading comfortable and enjoyable. Studies say a
          line length between 40-80 characters is optimal.
        </Box>
      </PageContent>
      <Box>
        <WidthShow>This sentence has a total of 43 characters.</WidthShow>
        <WidthShow>Whereas this sentence is longer and the line length is a total of 80 characters.</WidthShow>
        <Typography sx={{
          paddingTop: "2px",
          paddingBottom: "2px",
          paddingLeft: "30px",
          fontSize: "1.2rem",
          fontWeight: "500",
          marginTop: "40px",
          marginBottom: "40px",
          borderLeft: "5px solid blue"
        }}>Have a go at changing the line length of the paragraph below.</Typography>
      </Box>
      <Box display="flex" justifyContent="left" flexGrow={1} flexWrap="wrap" flexDirection="row" gap="20px"
           paddingTop="15px">
        <ButtonGroup
          value={typeface}
          setValue={setTypeface}
          label="Typeface"
          id="typeface"
          items={[
            { key: "Serif", value: "Serif" },
            { key: "Sans Serif", value: "Sans-serif" },
            { key: "Monospace", value: "Monospace" }
          ]}
        />
        <ButtonGroup
          value={casing}
          setValue={setCasing}
          label="Case"
          id="case"
          items={[
            { key: "Lowercase", value: "Default" },
            { key: "Uppercase", value: "Uppercase" }
          ]}
        />
        <ButtonGroup
          value={fontsize}
          setValue={setFontsize}
          label="Font Size"
          id="fontsize"
          items={[
            { key: "Small", value: "0.8rem" },
            { key: "Medium", value: "1.1rem" },
            { key: "Large", value: "1.6rem" }
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
