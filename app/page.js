"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

export default function Home() {
  const [user, setUser] = React.useState({ username: "", password: "" });

  const handleChange = (event) =>
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  const onContinue = user.username && user.password;

  return (
    <div className="container flex flex-col justify-center items-center mt-10 pt-10">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">T.M.D</h1>
      <div className="login-content p-3 sm:p-5 mt-5 sm:mt-14">
        <h2 className="text-xl font-semibold opacity-90 sm:text-2xl">
          Sign in
        </h2>
        <p className="font-semibold opacity-70 text-sm sm:text-base">
          ... to continue
        </p>
        <form className="mt-3 w-full sm:w-[400px]">
          <Input
            type="text"
            name="username"
            value={user.username}
            placeholder="Username"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <Button
            label="Sign in"
            disabled={!onContinue}
            className="border border-[#f3f3f3] rounded-md mt-10 bg-[#4875B4] text-white hover:opacity-80 outline-none p-3 w-full"
          />
        </form>
      </div>
    </div>
  );
}
