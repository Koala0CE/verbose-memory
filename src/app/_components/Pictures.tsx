import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Stack, Box, Typography } from "@mui/material";
import { TypeSpecimen } from "@mui/icons-material";

interface PicturesProps {
  imageUrl: string | StaticImageData;
  imageAlt: string | StaticImageData;
  fallbackImageUrl: string;
  fallbackImageAlt: string;
}

export const Pictures = ({
  imageUrl,
  imageAlt,
  fallbackImageUrl,
  fallbackImageAlt,
}: PicturesProps) => {
  const [imageLoadError, setImageLoadError] = React.useState(false);

  // Reset the error state when the image URL changes
  useEffect(() => {
    setImageLoadError(false);
  }, [imageUrl]);

  return (
    <Stack
      width={{ xs: 300, md: 600 }}
      height={{ xs: 300, md: 800 }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {imageLoadError ? (
        <>
          <Image
            // width={700}
            // height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            src={fallbackImageUrl}
            alt={fallbackImageAlt}
          />
          <Typography>
            This is a fallback image, an error must have occured!
          </Typography>
        </>
      ) : (
        <Image
          onError={() => setImageLoadError(true)}
          width={700}
          height={475}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          src={imageUrl}
          alt={typeof imageAlt === "string" ? imageAlt : "Fallback Alt Text"}
        />
      )}
    </Stack>
  );
};
