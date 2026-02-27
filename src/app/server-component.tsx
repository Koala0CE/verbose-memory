import { auth0 } from "@/lib/auth0";

export default async function ServerComponent() {
  const session = await auth0.getSession();
  if (!session) return <></>;

  try {
    const accessTokenResult = await auth0.getAccessToken();
    return (
      <>
        <h3>Access Token</h3>
        <pre data-testid="server-component-at">
          {JSON.stringify(accessTokenResult, null, 2)}
        </pre>
        <h3>User</h3>
        <pre data-testid="server-component">
          {JSON.stringify(session.user, null, 2)}
        </pre>
      </>
    );
  } catch {
    return <></>;
  }
}
