export const checkUserRole = (user: any) => {
  if (user && user["dev-n5bu2xj1ymmy2h22.eu.auth0.com/roles"]) {
    const userWithRoles = user as {
      "dev-n5bu2xj1ymmy2h22.eu.auth0.com/roles": string[];
    };

    const userRoles = userWithRoles["dev-n5bu2xj1ymmy2h22.eu.auth0.com/roles"];

    const hasFriendsAndFamilyRole = userRoles.includes("Friends & Family");

    return hasFriendsAndFamilyRole;
  }

  return false;
};
