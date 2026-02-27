import { auth0 } from "@/lib/auth0";
import { NextRequest, NextResponse } from "next/server";

async function showsHandler(req: NextRequest | Request) {
  try {
    const { token } = await auth0.getAccessToken();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const response = await fetch(`${apiUrl}/api/shows`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const shows = await response.json();

    return NextResponse.json(shows);
  } catch (error: unknown) {
    const err = error as { message?: string; status?: number };
    return NextResponse.json(
      { error: err.message ?? "Unknown error" },
      { status: err.status ?? 500 }
    );
  }
}

// Next 16 route handlers receive context.params as Promise
export const GET = auth0.withApiAuthRequired(showsHandler) as unknown as (
  req: NextRequest,
  ctx: { params: Promise<Record<string, string | string[]>> }
) => Promise<NextResponse>;
