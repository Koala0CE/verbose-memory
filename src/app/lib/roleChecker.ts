// This function checks if a user has the "Friends & Family" role.
export const checkUserRole = (user: any) => {
  // Get the Auth0 domain from the environment variables.
  const auth0Domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;

  // Check if the user object exists and if it has a property that matches the Auth0 domain followed by "/roles".
  if (user && user[`${auth0Domain}/roles`]) {
    // Cast the user object to a new type that has a string array for any key.
    const userWithRoles = user as {
      [key: string]: string[];
    };

    // Get the user's roles from the user object.
    const userRoles = userWithRoles[`${auth0Domain}/roles`];

    // Check if the user's roles include "Friends & Family".
    const hasFriendsAndFamilyRole = userRoles.includes("Friends & Family");
    // Return true if the user has the "Friends & Family" role, false otherwise.
    return hasFriendsAndFamilyRole;
  }
  // If the user object does not exist or does not have the expected roles property, return false.
  return false;
};
