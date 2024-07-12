import React from "react";
import Button from "../ui/Button";

export default function SignInUpButtons() {
  return (
    <div className="w-full flex justify-between items-center">
      <Button isLink link="signin" opp>
        Sign in
      </Button>
      <Button isLink link="signup">
        Sign up
      </Button>
    </div>
  );
}
