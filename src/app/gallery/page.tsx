"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container, Stack } from "@mui/material";
import { ContentfulResponse, fetchContentfulData } from "../contentfulApi";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { checkUserRole } from "../lib/roleChecker";
import { dummyData } from "../utils/dummyData";

export default function TitlebarImageList() {
  const [isFriendsAndFamily, setIsFriendsAndFamily] = useState(false);

  const [contentfulData, setContentfulData] =
    useState<ContentfulResponse | null>(null);

  // Use the useUser hook to get the user object
  const { user } = useUser();

  React.useEffect(() => {
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

  return (
    <>
      <Container
        sx={{
          //   bgcolor: "thistle",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"transparent"}
        >
          <ImageList
            cols={3}
            gap={50}
            variant="masonry"
            sx={{ width: "100%", height: "100%" }}
          >
            <ImageListItem key="Subheader">
              <ListSubheader component="div">Jupi & Elvy</ListSubheader>
            </ImageListItem>
            {contentfulData?.items.map((item) => {
              const selectedAsset = contentfulData.includes.Asset.find(
                (asset) => asset.sys.id === item.fields.image?.sys.id
              );

              return (
                <ImageListItem key={item.sys.id}>
                  <img
                    src={selectedAsset?.fields.file.url}
                    alt={item.fields.description}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.fields.index}
                    subtitle={item.fields.description}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.fields.title}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </Stack>
      </Container>
    </>
  );
}
