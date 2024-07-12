"use client";

import React from "react";

export default function SearchPeopleInput() {
  return (
    <div className="w-full max-w-60">
      <input
        placeholder="Search People"
        className="border-b border-b-main-cyan border-l border-l-main-cyan bg-transparent outline-none px-5 py-2 w-full"
      />
    </div>
  );
}
