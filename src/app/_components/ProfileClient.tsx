"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        color={"purple"}
        bgcolor={"white"}
      >
        <Image
          width={200}
          height={200}
          src={user.picture!}
          alt={user.nickname!}
        />
        <Typography> Hello, {user.nickname}</Typography>
      </Stack>
    )
  );
}
