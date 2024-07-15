import React from "react";
import Button from "../ui/Button";

interface SignInUpButtonsProps {
  closeNav?: () => void;
}

export default function SignInUpButtons({ closeNav }: SignInUpButtonsProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <Button isLink link="signin" onClick={closeNav} opp>
        Sign in
      </Button>
      <Button isLink link="signup" onClick={closeNav}>
        Sign up
      </Button>
    </div>
  );
}
