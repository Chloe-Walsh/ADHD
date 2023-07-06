// import { Box, Typography, Container, AppBar, Link, Button } from "@mui/material";
// import { useEffect, useState } from "react";
//
// function NavbarLink(props: { href: string; label: string; isBold?: boolean; isBig?: boolean; color: string }) {
//   return (
//     <Box sx={{ paddingLeft: props.isBig ? "0px" : "15px" }}>
//       <Link
//         underline="none"
//         href={"/" + props.href}
//         color={props.color}
//         sx={{
//           fontFamily: `"Poppins",sans-serif`,
//           scrollBehavior: "smooth",
//           fontSize: props.isBig ? "1.5rem" : "1.1rem",
//           fontWeight: props.isBold ? 800 : 500,
//           backgroundColor: "#FFFFFF00",
//           color: "black",
//           "&:hover": {
//             backgroundColor: "#FFFFFF00",
//             color: props.color,
//             fontWeight: props.isBold ? 800 : 600,
//           },
//         }}
//       >
//         {props.label}
//       </Link>
//     </Box>
//   );
// }
//
// export function Navbar(props: any) {
//   const [elevated, setElevated] = useState(false);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       setElevated(isScrolled);
//     };
//
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//
//   return (
//     <Box id="#adhd" sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 5, width: "100%" }}>
//       <AppBar
//         position="sticky"
//         elevation={elevated ? 4 : 0}
//         sx={{
//           transition: { backgroundColor: "0.3s ease-in-out", boxShadow: "0.3s ease-in-out" },
//           backgroundColor: elevated ? "white" : "white",
//           boxShadow: elevated ? " 0px 4px black" : " 0px 4px #e800c1",
//         }}
//       >
//         <Container
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             paddingTop: "10px",
//             paddingBottom: "10px",
//             scrollBehavior: "smooth",
//           }}
//         >
//           <NavbarLink color="#e800c1" label="ADHD" href="#adhd" isBold isBig />
//           <Box display="flex">
//             <NavbarLink color="blue" href="#readability" label="Readability" />
//             <NavbarLink color="purple" href="#decisions" label="Decisions" />
//             <NavbarLink color="orange" href="#intuitive" label="Intuitive" />
//             <NavbarLink color="grey" href="#project" label="Project" />
//           </Box>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }
//
//

import { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Link,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Drawer, Container
} from "@mui/material";

const navItems = [
  { label: "Readability", href: "#readability", color: "blue" },
  { label: "Decisions", href: "#decisions", color: "#740b9c" },
  { label: "Intuitive", href: "#intuitive", color: "#f55200" },
  { label: "Project", href: "#project", color: "darkgrey" }
];

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setElevated(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavItemsHorizontal = () => {
    return (
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            underline="none"
            href={item.href}
            sx={{
              fontFamily: `"Poppins", sans-serif`,
              fontSize: "1.1rem",
              fontWeight: 500,
              backgroundColor: "#FFFFFF00",
              color: "black",
              "&:hover": {
                backgroundColor: "#FFFFFF00",
                color: item.color,
                fontWeight: 600
              }
            }}
          >
            {item.label}
          </Link>
        ))}
      </Box>
    );
  };

  const renderNavItemsVertical = () => {
    return (
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label}>
            <Link
              underline="none"
              href={item.href}
              sx={{
                fontFamily: `"Poppins", sans-serif`,
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "black",
                "&:hover": {
                  color: item.color,
                  fontWeight: 600,
                  backgroundColor: "transparent" // Add this line to remove background color
                }
              }}
            >
              <ListItemText disableTypography primary={item.label} />
            </Link>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          transition: { backgroundColor: "0.3s ease-in-out", boxShadow: "0.3s ease-in-out" },
          backgroundColor: elevated ? "white" : "white",
          boxShadow: elevated ? " 0px 4px black" : " 0px 4px #e800c1"
        }}
        position="fixed"
      >
        <Container sx={{ display: "flex", alignItems: "center", paddingTop: "10px", paddingBottom: "10px" }}>
          <Link
            underline="none"
            href="#adhd"
            flexGrow={1}
            sx={{
              fontFamily: `"Poppins", sans-serif`,
              fontSize: "1.5rem",
              fontWeight: 800,
              backgroundColor: "#FFFFFF00",
              color: "black",
              "&:hover": {
                backgroundColor: "#FFFFFF00",
                color: "black",
                fontWeight: 800
              },
              "& span:hover": {
                color: "#e800c1"
              }
            }}
          >
            <span>ADHD</span>
          </Link>
          <Box sx={{ display: { xs: "block", md: "none" }, alignItems: "center" }}>
            <IconButton
              disableFocusRipple
              size="large"
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                color: "black",
                mr: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                "&:hover": {
                  backgroundColor: "#FFFFFF00", color: "darkgrey"
                }
              }}
            >
              <span style={{
                fontSize: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                m: 0,
                p: 0
              }}>{"\u2630"}</span>
            </IconButton>
          </Box>
          <Box sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center"
          }}>{renderNavItemsHorizontal()}</Box>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            minWidth: "200px",
            height: "50px",
            display: "flex",
            flexDirection: "row",
            padding: "20px"
          }}
        >
          {renderNavItemsVertical()}

        </Box>
      </Drawer>
      <Toolbar />
    </Box>
  );
};