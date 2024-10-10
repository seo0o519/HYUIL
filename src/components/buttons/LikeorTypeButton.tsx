"use client";
import React, { useState } from "react";


export default function LikeorTypeButton() {
  const [selected, setSelected] = useState<string>("like_list"); // 초기값: "찜 목록"

  const handleSelect = (value: string) => {
    setSelected(value);
  };
  
  return (
      <div className="flex">
      <button
        onClick={() => handleSelect("like_list")}
        className={`w-[180px] h-[48px] text-[16px] px-4 py-2 rounded-tl-sm ${
          selected === "like_list" ? "bg-likeortype_green text-white" : "bg-white text-likeortype_gray"
        }`}
      >
        찜 목록
      </button>
      <button
        onClick={() => handleSelect("my_type")}
        className={`w-[180px] h-[48px] text-[16px] px-4 py-2 rounded-tr-sm ${
          selected === "my_type" ? "bg-likeortype_green text-white" : "bg-white text-likeortype_gray"
        }`}
      >
        나의 취향
      </button>
    </div>

  );
}
