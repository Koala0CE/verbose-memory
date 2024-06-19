import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export const GET = withApiAuthRequired(async function shows(req) {
  try {
    const res = new NextResponse();
    const { accessToken } = await getAccessToken(req, res, {
      //   scopes: ["read:shows"],
    });

    console.log(accessToken, "hello");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${apiUrl}/api/shows`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const shows = await response.json();

    return NextResponse.json(shows, res);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.status || 500 }
    );
  }
});
