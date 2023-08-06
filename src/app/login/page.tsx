"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const formIsValid = user.email.length > 0 && user.password.length > 4;

  const onLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post("/api/users/login", user);
      console.log(response);

      toast.success("Login success");
      router.push("/profile");
    } catch (err: any) {
      console.log("Login failed: ", err.message);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <h1>Login</h1>
      <hr />

      <form onSubmit={onLogin}>
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
              "Login"
            )}
          </button>

          <Link href={"/signup"}>Visit Signup page</Link>
        </div>
      </form>
    </div>
  );
}
