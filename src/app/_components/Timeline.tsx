"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { IconButton, Stack, Typography } from "@mui/material";
import LoyaltySharpIcon from "@mui/icons-material/LoyaltySharp";
import WaterSharpIcon from "@mui/icons-material/WaterSharp";
import NightShelterSharpIcon from "@mui/icons-material/NightShelterSharp";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useEffect, useState } from "react";
import { Pictures } from "./Pictures";

const colour: any = "primary";

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
    colour: colour,
    imageUrl: "/valentinesDay.png",
    imageAlt: "Change me",
  },
  {
    date: "13 MAR 2022",
    icon: WaterSharpIcon,
    title: "Blackpool",
    description: "First trip together!",
    colour: colour,
    imageUrl: "/airPlants.png",
    imageAlt: "Change me",
  },
  {
    date: "25 MAR 2022",
    icon: NightShelterSharpIcon,
    title: "London",
    description: "Two days trip together with Nanako!",
    colour: colour,
    imageUrl: "/valentinesDay.png",
    imageAlt: "Change me",
  },
  {
    date: "1 APR 2022",
    icon: FilterVintageIcon,
    title: "First date night",
    description: "Before Jupi's Easter Holiday!",
    colour: colour,
    imageUrl: "/airPlants.png",
    imageAlt: "Change me",
  },
  {
    date: "30 APR 2022",
    icon: RepeatIcon,
    title: "Military Field Trip",
    description: "Uni trip to Preston - Fulwood!",
    colour: colour,
    imageUrl: "/airPlants.png",
    imageAlt: "Change me",
  },
  {
    date: "13 JUN 2022",
    icon: RepeatIcon,
    title: "Ale's graduation",
    description: "One week trip to Bucharest! Graduation ceremony On the 16th",
    colour: colour,
    imageUrl: "/airPlants.png",
    imageAlt: "Change me",
  },
  {
    date: "18 JUN 2022",
    icon: RepeatIcon,
    title: "Meeting Jupi's Familiy",
    description: "One week trip to Austria!",
    colour: colour,
    imageUrl: "/airPlants.png",
    imageAlt: "Change me",
  },
  {
    date: "04 July 2022",
    icon: RepeatIcon,
    title: "Scotland",
    description: "3 Days Exploring Glasgow & Edinburgh",
    colour: colour,
    imageUrl: "/airPlants.png",
    imageAlt: "Change me",
  },
  {
    date: "08 JULY 2022",
    icon: RepeatIcon,
    title: "Liverpool",
    description: "One day trip to Liverpool!",
    colour: colour,
    imageUrl: "/airPlants.png",
    imageAlt: "Change me",
  },
  {
    date: "12 JULY 2022",
    icon: RepeatIcon,
    title: "Our Graduation",
    description: "BSc Software Engineering, UCLAN, Preston, United Kingdom",
    colour: colour,
    imageUrl: "/airPlants.png",
    imageAlt: "Change me",
  },
];

export default function CustomizedTimeline() {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string | null>(null);

  const resetSelectedImage = () => {
    setSelectedImageUrl(null);
    setSelectedImageAlt(null);
  };

  useEffect(() => {
    // Handle state updates here
    if (selectedImageUrl !== null && selectedImageAlt !== null) {
      // This block will execute after state updates
      console.log("Selected Image URL:", selectedImageUrl);
      console.log("Selected Image Alt:", selectedImageAlt);
    }
  }, [selectedImageUrl, selectedImageAlt]);

  return (
    <>
      <Stack direction={"row"} bgcolor={"wheat"}>
        {/* Timeline */}
        <Stack bgcolor={"thistle"}>
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
                      // href="/album"
                      size="small"
                      aria-label="delete"
                      onClick={() => {
                        setSelectedImageUrl(null); // Reset the selected image
                        setSelectedImageAlt(null); // Reset the selected alt text

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
                  <Typography variant="h6" component="span">
                    {item.title}
                  </Typography>
                  <Typography>{item.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Stack>
        {/* Pictures */}
        <Stack
          justifyContent={"center"}
          bgcolor={"pink"}
          width={500}
          height={500}
        >
          {selectedImageUrl && selectedImageAlt && (
            <Pictures
              imageUrl={selectedImageUrl}
              imageAlt={selectedImageUrl}
              fallbackImageUrl={fallback.image}
              fallbackImageAlt={fallback.alt}
            />
          )}
        </Stack>
      </Stack>
      {/*  */}
      <Stack bgcolor={"pink"}></Stack>
    </>
  );
}

{
  /* <IconButton
            href="/album"
            size="small"
            aria-label="delete"
            onClick={() => handleButtonClick(item.icon)}
          >
            {<item.icon />}
          </IconButton> */
}
