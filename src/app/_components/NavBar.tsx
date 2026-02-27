"use client";

import { LinearProgress, Stack, Tooltip, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Login from "./Login";

// Static shell so server and client first paint match (avoids hydration mismatch from useUser()).
function NavBarShell() {
  return (
    <Stack
      px={5}
      spacing={2}
      direction="row"
      justifyContent="flex-end"
      alignContent="baseline"
      alignItems="center"
      height={30}
      bgcolor="purple"
    >
      <Link
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          marginRight: "auto",
          fontWeight: 600,
        }}
      >
        Home
      </Link>
      <Box width={80} />
    </Stack>
  );
}

export const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { user, error, isLoading } = useUser();

  useEffect(() => setMounted(true), []);

  // Same markup on server and initial client paint so hydration matches.
  if (!mounted) {
    return <NavBarShell />;
  }

  if (isLoading) return <LinearProgress color="secondary" />;
  if (error) return <LinearProgress color="inherit" />;

  return (
    <Stack
      px={5}
      spacing={2}
      direction={"row"}
      justifyContent={"flex-end"}
      alignContent={"baseline"}
      alignItems={"center"}
      height={30}
      bgcolor={"purple"}
    >
      <Link
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          marginRight: "auto",
          fontWeight: 600,
        }}
      >
        Home
      </Link>
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
