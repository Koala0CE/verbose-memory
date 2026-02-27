import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
  // Return 204 when not logged in instead of 401, so useUser() doesn't log "401 Unauthorized"
  noContentProfileResponseWhenUnauthenticated: true,
});
