import Link from "next/link";
import React from "react";

export default function LogoLink() {
  return (
    <Link href="/" className="">
      <p className="text-xl font-semibold text-white">
        Friend<span className="text-main-cyan">Hub</span>
      </p>
    </Link>
  );
}
