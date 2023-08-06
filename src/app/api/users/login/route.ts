import { connect } from "@/database/config";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { isValidPassword } from "@/helpers/hash";
import jwt from "jsonwebtoken";
import { env } from "@/env";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    console.log(reqBody);

    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          error: "User does not exist",
        },
        {
          status: 400,
        },
      );
    }

    const passwordIsValid = await isValidPassword(password, user.password);

    if (!passwordIsValid) {
      return NextResponse.json(
        {
          error: "Invalid password",
        },
        {
          status: 401,
        },
      );
    }

    const data = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(data, env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successfully",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

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
