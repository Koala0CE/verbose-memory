import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "./_components/Hero";
import { Stack } from "@mui/material";
import CustomizedTimeline from "./_components/Timeline";
import TitlebarBelowImageList from "./album/page";

export default function Home() {
  return (
    <Stack spacing={5} mt={5} justifyContent={"center"} alignItems={"center"}>
      <Hero />
      {/* <TimeLine /> */}
      <CustomizedTimeline />
      <TitlebarBelowImageList />
    </Stack>
  );
}
