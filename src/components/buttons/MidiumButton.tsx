"use client";
import React from "react";

// props로 type을 받아옴
interface MidiumButtonProps {
  text: string;
}

export default function MidiumButton({ text }: MidiumButtonProps) {
  return (
    <div className="flex">
      <button
        className={`w-[150px] h-[24px] text-[10px] rounded text-[#8F8F8F] border border-[#8F8F8F] bg-white active:bg-[#F6F6F6]`}
      >
        {text}
      </button>
    </div>
  );
}
