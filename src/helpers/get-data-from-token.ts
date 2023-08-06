import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { env } from "@/env";

export function getDataFromToken(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, env.TOKEN_SECRET!);

    return decodedToken.id;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
