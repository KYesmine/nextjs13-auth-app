import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/get-data-from-token";
import User from "@/models/User";

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findById(userId).select("-password");

    return NextResponse.json({
      message: "User found!",
      data: user,
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: err.message,
      },
      { status: 400 },
    );
  }
}
