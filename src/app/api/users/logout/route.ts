import { NextResponse } from "next/server";

export function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successfully!",
      success: true,
    });

    response.cookies.delete("token");

    return response;
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      {
        status: 500,
      },
    );
  }
}
