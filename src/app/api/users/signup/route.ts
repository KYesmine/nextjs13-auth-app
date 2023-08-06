import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import { hashPassword } from "@/helpers/hash";
import { connect } from "@/database/config";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log({ reqBody });

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        {
          error: "Already exist",
        },
        {
          status: 401,
        },
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    }).save();

    console.log({ newUser });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user: newUser,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
