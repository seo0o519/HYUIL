"use client";
import React from "react";

interface ShowAllButtonProps {}

export default function ShowAllButton({}: ShowAllButtonProps) {
  return (
    <div className="flex">
      <button
        className={`w-[312px] h-[30px] text-[12px] rounded bg-white text-[#48694A] border border-[#48694A] active:bg-[#48694A] active:text-white `}
      >
        전체보기
      </button>
    </div>
  );
}
