import React from "react";
import { redirect } from "next/navigation";
import { auth0 } from "@/lib/auth0";
import ServerComponent from "@/app/server-component";
import ClientComponent from "@/app/client-component";

export default async function ProfilePage() {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login?returnTo=/profile");
  }

  return (
    <main>
      <h1>Profile</h1>
      <h2>Page:</h2>
      <h3>Access Token</h3>
      <pre>
        {JSON.stringify({ accessToken: session?.accessToken }, null, 2)}
      </pre>
      <h3>User</h3>
      <pre>{JSON.stringify(session?.user, null, 2)}</pre>
      <h2>Server Component:</h2>
      {/* ServerComponent is an async server component */}
      <ServerComponent />
      <h2>Client Component:</h2>
      <ClientComponent />
    </main>
  );
}
