import Link from "next/link";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  isLink?: boolean;
  link?: string;
  children: React.ReactNode;
  opp?: boolean;
}

export default function Button({
  onClick,
  isLink,
  link,
  children,
  opp,
}: ButtonProps) {
  return isLink ? (
    <Link
      href={link ?? ""}
      onClick={onClick}
      className={`px-6 py-2 rounded-full   transition-colors duration-300  ${
        opp
          ? "border-2 border-main-cyan  text-main-cyan hover:text-bg-dark hover:bg-main-cyan"
          : "bg-main-cyan text-bg-dark hover:bg-main-cyan-hover"
      }`}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className="px-5 py-2 rounded-full bg-main-cyan hover:bg-main-cyan-hover transition-colors duration-300 text-bg-dark"
    >
      {children}
    </button>
  );
}
