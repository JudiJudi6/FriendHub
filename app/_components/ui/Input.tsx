import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  idName: string;
}

export default function Input({ placeholder, type, idName }: InputProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-1">
      <label htmlFor={idName} className="w-full text-xs">
        {placeholder}{" "}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        required
        name={idName}
        id={idName}
        className="border-b border-b-main-cyan border-l border-l-main-cyan bg-transparent outline-none px-5 py-2 w-full text-sm"
      />
    </div>
  );
}
