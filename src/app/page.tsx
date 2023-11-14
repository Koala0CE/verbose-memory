"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "./_components/Hero";
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import CustomizedTimeline from "./_components/Timeline";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `${playfair.style.fontFamily}`,
    },
    // h3: {
    //     fontSize: '2rem',
    //     '@media (min-width:600px)': {
    //         fontSize: '1.5rem'
    //     }
    // } // keeping it here for when I will need it
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={5} mt={5} justifyContent={"center"} alignItems={"center"}>
        <Hero />
        <CustomizedTimeline />
      </Stack>
    </ThemeProvider>
  );
}
