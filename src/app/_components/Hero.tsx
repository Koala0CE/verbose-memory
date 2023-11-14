import { Stack, Typography } from "@mui/material";
import React from "react";

export const Hero = () => {
  return (
    <Stack>
      <Typography fontWeight={600} fontSize={{ xs: "1.5rem", md: "5rem" }}>
        Adventures of Jupi & Elvy
      </Typography>
    </Stack>
  );
};
