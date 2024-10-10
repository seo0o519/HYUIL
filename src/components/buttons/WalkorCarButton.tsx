"use client";
import React, { useState } from "react";


export default function WalkorCarButton() {
  const [selected, setSelected] = useState<string>("walk"); // 초기값: "도보"

  const handleSelect = (value: string) => {
    setSelected(value);
  };
  
  return (
    <div className="flex">
      <button
        onClick={() => handleSelect("walk")}
        className={` w-[50.6px] h-[36px] text-[12px] rounded-l-md ${
          selected === "walk" ? "bg-walkorcar_blue text-white" : "bg-white text-walkorcar_blue"
        }`}
      >
        도보
      </button>
      <button
        onClick={() => handleSelect("car")}
        className={` w-[50.6px] h-[36px] text-[12px] rounded-r-md ${
          selected === "car" ? "bg-walkorcar_blue text-white" : "bg-white text-walkorcar_blue"
        }`}
      >
        차량
      </button>
    </div>
  );
}
