"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useSignIn, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signIn, setActive } = useSignIn();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // console.log({ user });
  useEffect(() => {
    const role = user?.publicMetadata.role;
    if (role) {
      router.push(`/${role}`);
    }
  }, [router, user]);

  // guest log-in
  const handleGuestLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signIn || !setActive) return;
    setLoading(true);
    try {
      console.log(
        "Env test:",
        process.env.NEXT_PUBLIC_IDENTIFIER,
        process.env.NEXT_PUBLIC_PASSWORD
      );

      const result = await signIn.create({
        identifier: process.env.NEXT_PUBLIC_IDENTIFIER!,
        password: process.env.NEXT_PUBLIC_PASSWORD!,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/student"); // redirect to guest dashboard or home
      } else {
        console.error("Guest login failed:", result);
      }
    } catch (err: any) {
      console.error("Guest login error:", err.errors || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-skyLight">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Image src={"/logo.png"} height={24} width={24} alt="logo" />
            School
          </h1>
          <h2 className="text-gray-400">Sign in to your account</h2>
          <Clerk.GlobalError className="text-sm text-red-400" />
          <Clerk.Field name={"identifier"} className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-500">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-sm text-red-400" />
          </Clerk.Field>
          <Clerk.Field name={"password"} className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-500">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-sm text-red-400" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="bg-blue-500 text-white my-1 rounded-md text-sm p-[10px] cursor-pointer"
          >
            Sign In
          </SignIn.Action>
          {/* Guest login button */}
          <button
            onClick={handleGuestLogin}
            disabled={loading}
            className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition rounded-md text-sm p-[10px] mt-2 cursor-pointer"
          >
            {loading ? "Logging in..." : "Continue as Guest (student)"}
          </button>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
