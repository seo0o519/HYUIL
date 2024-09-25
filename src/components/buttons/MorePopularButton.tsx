"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

// props로 activate 받아옴
interface MorePopularButtonProps {
  activate: boolean;
}

export default function MorePopularButton({
  activate,
}: MorePopularButtonProps) {
  return (
    <div className="flex">
      <button
        className={`flex items-center justify-center  w-[135px] h-[38px] text-[12px] rounded-full px-3  ${
          activate
            ? "bg-white text-[#48694A] border border-[#48694A]  active:bg-[#48694A] active:text-white"
            : "bg-white text-[#999999] border border-[#999999] "
        }`}
        style={{ letterSpacing: "-0.5px" }}
      >
        인기 워케이션 더보기
        <FaChevronRight
          style={{ width: "10px", height: "10px", marginLeft: "4px" }}
        />
      </button>
    </div>
  );
}
