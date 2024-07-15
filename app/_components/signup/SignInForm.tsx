"use client";

import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function SignInForm() {
  return (
    <form
      action={async (formData) => {
        const data = Object.fromEntries(formData.entries());
        console.log(data);
      }}
      className="flex flex-col justify-center items-center gap-6 mt-8"
    >
      <Input idName="email" placeholder="Email" type="email" />
      <Input idName="password" placeholder="Password" type="password" />
      <Button>Sign in</Button>
    </form>
  );
}
