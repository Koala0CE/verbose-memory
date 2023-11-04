import * as React from "react";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function TitlebarBelowImageList() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Box justifyContent={"center"} alignItems={"center "}>
        <Image fill src={"/valentinesDay.png"} alt={"Flowers"}></Image>
      </Box>
    </Stack>
  );
}
