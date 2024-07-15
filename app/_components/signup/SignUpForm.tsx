"use client";

import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function SignUpForm() {
  return (
    <form
      action={async (formData) => {
        const data = Object.fromEntries(formData.entries());
        console.log(data);
      }}
      className="flex flex-col justify-center items-center gap-6 mt-8"
    >
      <Input idName="name" placeholder="Name" type="text" />
      <Input idName="surname" placeholder="Surname" type="text" />
      <Input idName="email" placeholder="Email" type="email" />
      <Input idName="password" placeholder="Password" type="password" />
      <Input
        idName="repPassword"
        placeholder="Repeat Password"
        type="password"
      />
      <Button>Sign up</Button>
    </form>
  );
}
