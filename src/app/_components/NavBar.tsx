import { LinearProgress, Stack, Tooltip } from "@mui/material";
import React from "react";
import Logout from "./Logout";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import Login from "./Login";

export const NavBar = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <LinearProgress color="secondary" />;
  if (error) return <LinearProgress color="inherit" />;

  return (
    <Stack
      px={5}
      spacing={2}
      direction={"row"}
      justifyContent={"flex-end"}
      alignContent={"baseline"}
      height={30}
      bgcolor={"purple"}
    >
      {user ? (
        <>
          <Logout />

          <Tooltip title={user.nickname}>
            <Image
              width={30}
              height={30}
              src={user?.picture!}
              alt={user?.nickname!}
            />
          </Tooltip>
        </>
      ) : (
        <Login />
      )}
    </Stack>
  );
};
