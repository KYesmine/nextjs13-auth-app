"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const { user } = useUser();
  const logout = async () => {
    try {
      const response = await fetch("/api/users/logout");

      toast.success("Logout successful");
      router.push("/login");
    } catch (err: any) {
      console.log("Error: ", err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 align-items-center justify-content-center">
      <h1>Profile Page</h1>
      <hr />

      {user && <Link href={`/profile/${user}`}>{user}</Link>}

      <button className="btn btn-primary" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
