"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const formIsValid =
    user.email.length > 0 &&
    user.username.length > 0 &&
    user.password.length > 4;

  const onSignup = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);

      router.push("/login");
    } catch (err: any) {
      console.log("Signup failed", err.message);

      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h1>Signup</h1>
      <hr />

      <form onSubmit={onSignup}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>

          <input
            type="text"
            className="form-control"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            type="email"
            className="form-control"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
          />
        </div>

        <div className="vstack align-items-center gap-3">
          <button
            disabled={!formIsValid || isLoading}
            type="submit"
            className="btn btn-primary mt-3"
          >
            {isLoading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Signup"
            )}
          </button>

          <Link href={"/login"}>Visit Login page</Link>
        </div>
      </form>
    </div>
  );
}
