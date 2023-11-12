import React, { useEffect } from "react";
import Image from "next/image";
import { Stack, Box, Typography } from "@mui/material";
import { TypeSpecimen } from "@mui/icons-material";

interface PicturesProps {
  imageUrl: string;
  imageAlt: string;
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
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Box justifyContent={"center"} alignItems={"center "}>
        {imageLoadError ? (
          <>
            <Image
              //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"#
              fill
              //   width={500}
              //   height={500}
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
            width={300}
            height={300}
            src={imageUrl}
            alt={imageAlt}
          />
        )}
      </Box>
    </Stack>
  );
};
