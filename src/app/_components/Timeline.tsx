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
import { ContentfulResponse, fetchContentfulData } from "../contentfulApi";
import { getRandomColour } from "../utils/randomColour";

import { useUser } from "@auth0/nextjs-auth0/client";
import { dummyData } from "../utils/dummyData";
import { checkUserRole } from "../lib/roleChecker";

const fallback = {
  image: "/airPlants.png",
  alt: "Fallback image air plants",
};

export default function CustomizedTimeline() {
  const [isFriendsAndFamily, setIsFriendsAndFamily] = useState(false);

  const [contentfulData, setContentfulData] =
    useState<ContentfulResponse | null>(null);

  // Use the useUser hook to get the user object
  const { user } = useUser();

  useEffect(() => {
    const hasFriendsAndFamilyRole = checkUserRole(user);

    // Update the state variable
    setIsFriendsAndFamily(hasFriendsAndFamilyRole);

    // Fetch and set contentful data only if the user has the required role
    if (hasFriendsAndFamilyRole) {
      const fetchData = async () => {
        const data = await fetchContentfulData();
        setContentfulData(data);
      };

      fetchData();
    } else {
      setContentfulData(dummyData);
    }
  }, [user]);

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
            {contentfulData?.items.map((item) => (
              <TimelineItem key={item.sys.id}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  variant="body2"
                  color={"white"}
                >
                  {item.fields.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color={getRandomColour()}>
                    {item.fields.image && (
                      <IconButton
                        sx={{ color: "white" }}
                        // href="/album"
                        size="small"
                        aria-label="delete"
                        onClick={() => {
                          setIsDrawerOpen(!isDrawerOpen);

                          resetSelectedImage();

                          const selectedAsset =
                            contentfulData?.includes.Asset.find(
                              (asset) =>
                                asset.sys.id === item.fields.image?.sys.id
                            );

                          setSelectedImageUrl(
                            selectedAsset?.fields.file.url || ""
                          );
                          setSelectedImageAlt(
                            selectedAsset?.fields.file.fileName || ""
                          );
                        }}
                      >
                        {/* {<item.icon />} */}
                      </IconButton>
                    )}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="h6"
                    fontStyle={"oblique"}
                    component="span"
                  >
                    {item.fields.title}
                  </Typography>
                  <Typography>{item.fields.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Stack>

        {/* Pictures */}
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
      </Stack>
    </>
  );
}
