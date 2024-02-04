import { useUser } from "@auth0/nextjs-auth0/client";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { checkUserRole } from "../lib/roleChecker";

export const Hero = () => {
  const { user } = useUser();
  const [hasRole, setHasRole] = useState(false);

  // checks if the user has the "Friends & Family" role
  useEffect(() => {
    const hasFriendsAndFamilyRole = checkUserRole(user);
    setHasRole(hasFriendsAndFamilyRole);
  }, [user]);

  return (
    <Stack>
      <Typography
        fontStyle={"italic"}
        fontWeight={500}
        fontSize={{ xs: "1.5rem", md: "5rem" }}
      >
        {hasRole ? "Adventures of Jupi & Elvy" : "Adventures of Jupi & Elvy"}
      </Typography>
    </Stack>
  );
};
