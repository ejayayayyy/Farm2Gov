"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const users = [
  { email: "farmer@example.com", password: "farmerpass", role: "farmer" },
  { email: "gov@example.com", password: "govpass", role: "government" },
];

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("role", user.role);

      if (user.role === "farmer") {
        router.push("/f/dashboard");
      } else if (user.role === "government") {
        router.push("/g/dashboard");
      }
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {" "}
      <div className="flex flex-col bg-white rounded-xl p-10 shadow w-full max-w-md gap-8">
        {/* logo */}
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-2 items-center">
            <Image 
            src="/images/farm2gov.png"
            alt="Farm2Gov Logo"
            height={80}
            width={80}
            />
          </div>
          <div className="flex items-center text-2xl justify-center font-medium">
            Welcome to Farm2Gov
          </div>
          <span className="text-gray-500">Sign in to your account</span>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="text-sm text-red-500 bg-red-100 px-4 py-2 rounded">
              {error}
            </div>
          )}
          <div className="flex flex-col gap-1">
            <label className="text-sm">Email</label>
            <input
              type="text"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg outline-none border border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-sm">Password</label>
              <Link href="/forgot-password" className="text-gray-500 text-sm">
                Forgot password
              </Link>
            </div>
            <input
              type="password"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg outline-none border border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors duration-150 cursor-pointer"
          >
            Sign in
          </button>
        </form>

        {/* account creation */}
        <div className="flex items-center justify-center text-sm mt-4">
          <span className="text-gray-500">
            Don't have an account?{" "}
            <Link href="/create-account" className="text-green-500">
              Create account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
