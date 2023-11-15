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
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LoyaltySharpIcon from "@mui/icons-material/LoyaltySharp";
import WaterSharpIcon from "@mui/icons-material/WaterSharp";
import NightShelterSharpIcon from "@mui/icons-material/NightShelterSharp";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CastleIcon from "@mui/icons-material/Castle";
import Groups2Icon from "@mui/icons-material/Groups2";
import TapasIcon from "@mui/icons-material/Tapas";
import SchoolIcon from "@mui/icons-material/School";
import { useEffect, useState } from "react";
import { Pictures } from "./Pictures";
import Image, { StaticImageData } from "next/image";
import liverpoolPic from "/public/liverpool.webp";
import blackpoolPic from "/public/blackpool.webp";
import londonPic from "/public/london.webp";
import airplantsPic from "/public/airplants.webp";
import graduationAlepPic from "/public/graduationALE.webp";
import scotlandPic from "/public/scotland.webp";
import graduationUclanPic from "/public/graduationUCLAN.webp";
import SwipeableEdgeDrawer from "./Drawer";

const colour: any = "primary";
const secondaryColour = "secondary";
const successColour = "success";
const errorColour = "error";
const warningColour = "warning";
const greyColour = "grey";
const inheritColour = "inherit";
const infoColour = "info";

const fallback = {
  image: "/airPlants.png",
  alt: "Fallback image air plants",
};

const timelineData = [
  {
    date: "14 FEB 2022",
    icon: LoyaltySharpIcon,
    title: "1st Date",
    description: "Valentine's Day!",
    colour: errorColour,
    imageUrl: airplantsPic,

    imageAlt: "Change me",
  },
  {
    date: "13 MAR 2022",
    icon: WaterSharpIcon,
    title: "Blackpool",
    description: "First trip together!",
    colour: colour,
    imageUrl: blackpoolPic,
    imageAlt: "Change me",
  },
  {
    date: "25 MAR 2022",
    icon: NightShelterSharpIcon,
    title: "London",
    description: "Two days trip together with Nanako!",
    colour: warningColour,
    imageUrl: londonPic,
    imageAlt: "Change me",
  },
  {
    date: "1 APR 2022",
    icon: TapasIcon,
    title: "First date night",
    description: "Before Jupi's Easter Holiday!",
    colour: successColour,
    imageUrl: airplantsPic,
    imageAlt: "Change me",
  },
  {
    date: "30 APR 2022",
    icon: MilitaryTechIcon,
    title: "Military Field Trip",
    description: "Uni trip to Preston - Fulwood!",
    colour: infoColour,
    imageUrl: airplantsPic,
    imageAlt: "Change me",
  },
  {
    date: "13 JUN 2022",
    icon: SchoolIcon,
    title: "Ale's graduation",
    description: "One week trip to Bucharest! Graduation ceremony On the 16th",
    colour: successColour,
    imageUrl: graduationAlepPic,
    imageAlt: "Change me",
  },
  {
    date: "18 JUN 2022",
    icon: Groups2Icon,
    title: "Meeting Jupi's Familiy",
    description: "One week trip to Austria!",
    colour: warningColour,
    imageUrl: airplantsPic,
    imageAlt: "Change me",
  },
  {
    date: "04 July 2022",
    icon: CastleIcon,
    title: "Scotland",
    description: "3 Days Exploring Glasgow & Edinburgh",
    colour: inheritColour,
    imageUrl: scotlandPic,
    imageAlt: "Change me",
  },
  {
    date: "08 JULY 2022",
    icon: SportsSoccerIcon,
    title: "Liverpool",
    description: "One day trip to Liverpool!",
    colour: successColour,
    imageUrl: liverpoolPic,
    imageAlt: "Change me",
  },
  {
    date: "12 JULY 2022",
    icon: SchoolIcon,
    title: "Our Graduation",
    description: "BSc Software Engineering, UCLAN, Preston, United Kingdom",
    colour: secondaryColour,
    imageUrl: graduationUclanPic,
    imageAlt: "Change me",
  },
];

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

        {isMobile && (
          <IconButton onClick={handleToggleDrawer}>
            <SwipeableEdgeDrawer
              imageSrc={selectedImageUrl}
              isOpen={isDrawerOpen}
              onToggleDrawer={handleToggleDrawer}
            />
          </IconButton>
        )}
        <Stack
          bgcolor={"olive"}
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
