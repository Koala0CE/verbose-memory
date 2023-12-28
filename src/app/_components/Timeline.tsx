"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Pictures } from "./Pictures";
import { StaticImageData } from "next/image";
import SwipeableEdgeDrawer from "./Drawer";
import { timelineData } from "../_exports/timelineData";

const fallback = {
  image: "/airPlants.png",
  alt: "Fallback image air plants",
};

export default function CustomizedTimeline() {
  // Retrieve the current theme using the useTheme hook from MUI
  const theme = useTheme();

  // Determine if the screen size is considered as mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // Determine if the screen size is considered as desktop
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Initialize state to track the open/closed state of the drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Define a function to toggle the state of the drawer between open and closed
  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Initialize state to track the selected image URL, allowing for string, StaticImageData, or null
  const [selectedImageUrl, setSelectedImageUrl] = useState<
    string | StaticImageData | null
  >(null);

  // Initialize state to track the alternative text for the selected image ALT, allowing for string, StaticImageData, or null
  const [selectedImageAlt, setSelectedImageAlt] = useState<
    string | StaticImageData | null
  >(null);

  // Define a function to reset the selected image URL and alternative text to null
  const resetSelectedImage = () => {
    setSelectedImageUrl(null);
    setSelectedImageAlt(null);
  };

  useEffect(() => {
    // Effect to handle updates when selectedImageUrl or selectedImageAlt change

    // Check if both selectedImageUrl and selectedImageAlt are not null
    if (selectedImageUrl !== null && selectedImageAlt !== null) {
      // This block will execute after state updates
      console.log("Selected Image URL:", selectedImageUrl);
      console.log("Selected Image Alt:", selectedImageAlt);
    }
  }, [selectedImageUrl, selectedImageAlt]);

  return (
    <>
      <Stack
        justifyContent={{ xs: "center", md: "space-evenly" }}
        direction={{ xs: "column", md: "row" }}
      >
        {/* Timeline */}
        <Stack>
          <Timeline position="alternate">
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color={"white"}
                >
                  {item.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color={item.colour}>
                    <IconButton
                      sx={{ color: "white" }}
                      // href="/album"
                      size="small"
                      aria-label="delete"
                      onClick={() => {
                        setIsDrawerOpen(!isDrawerOpen);

                        resetSelectedImage;

                        // setSelectedImageUrl(null); // Reset the selected image
                        // setSelectedImageAlt(null); // Reset the selected alt text

                        setSelectedImageUrl(item.imageUrl);
                        setSelectedImageAlt(item.imageAlt);
                      }}
                    >
                      {<item.icon />}
                    </IconButton>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="h6"
                    fontStyle={"oblique"}
                    // fontWeight={500}
                    component="span"
                  >
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Stack>
        {/* Pictures */}

        {/* <div
          style={{
            position: "fixed",
            top: 0,
            // left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }} */}
        {/* > */}

        {isMobile && selectedImageUrl && (
          <IconButton onClick={handleToggleDrawer}>
            <SwipeableEdgeDrawer
              imageSrc={selectedImageUrl}
              isOpen={isDrawerOpen}
              onToggleDrawer={handleToggleDrawer}
            />
          </IconButton>
        )}
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          width={{ xs: "100vw", md: 700 }}
          height={{ xs: "100vh", md: 900 }}
          style={{ display: selectedImageUrl ? "flex" : "none" }}
        >
          {isDesktop && selectedImageUrl && selectedImageAlt && (
            <Pictures
              imageUrl={selectedImageUrl}
              imageAlt={selectedImageUrl}
              fallbackImageUrl={fallback.image}
              fallbackImageAlt={fallback.alt}
            />
          )}
        </Stack>
        {/* </div> */}
      </Stack>
    </>
  );
}
