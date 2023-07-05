import { Box, Typography, Container, AppBar, Link, Button } from "@mui/material";
import { useEffect, useState } from "react";

function NavbarLink(props: { href: string; label: string; isBold?: boolean; isBig?: boolean; color: string }) {
  return (
    <Box padding="5px" sx={{ scrollBehavior: "smooth" }}>
      <Link
        underline="none"
        href={"/" + props.href}
        color={props.color}
        sx={{
          scrollBehavior: "smooth",
          fontSize: props.isBig ? "25px" : "18px",
          fontWeight: props.isBold ? 800 : 500,
          backgroundColor: "#FFFFFF00",
          color: "black",
          "&:hover": {
            backgroundColor: "#FFFFFF00",
            color: props.color,
          },
        }}
      >
        {props.label}
      </Link>
    </Box>
  );
}

export function Navbar(props: any) {
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

  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 5, width: "100%" }}>
      <AppBar
        position="sticky"
        elevation={elevated ? 4 : 0}
        sx={{
          transition: { backgroundColor: "0.3s ease-in-out", boxShadow: "0.3s ease-in-out" },
          backgroundColor: elevated ? "white" : "orange",
          boxShadow: elevated ? " 0px 2px black" : "none",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "10px",
            paddingBottom: "10px",
            scrollBehavior: "smooth",
          }}
        >
          <NavbarLink color="hotpink" label="ADHD" href="#adhd" isBold isBig />
          <Box display="flex">
            <NavbarLink color="blue" href="#readability" label="Readability" />
            <NavbarLink color="purple" href="#decisions" label="Decisions" />
            <NavbarLink color="orange" href="#intuitive" label="Intuitive" />
            <NavbarLink color="green" href="#distractions" label="Distractions" />
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}
