"use client";
import React, { useState } from "react";
import Img from "./hotel.png";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";


function LeisureSliderItem(){
    return (
      <ListItem sx={{padding: "2px"}}>
        <div className="w-[154px] h-[178px]">
            <img src={Img.src} className="h-[110px] rounded-md w-full" />
            <div className="w-full font-semibold text-[16px] pt-2">강릉 모던 프라이빗 <br/>공간 | 휴휴가</div>
            <p className="text-[12px] text-gray-400 pt-1">강릉시 황리단 민속마을</p>
        </div>
      </ListItem>
    );
}

export default function LeisureSlider() {

  
  return (
    <div>
      <div className="flex justify-between "><p className="text-[20px] font-bold p-1">이번주 HOT 인기 레저활동</p> <button className="text-[12px] p-1 text-gray-600">더보기 > </button></div>
      <List className="flex items-center flex-row w-full h-full relative overflow-auto pt-1.5" sx={{scrollbarWidth: "none"}}>
        <LeisureSliderItem/>
        <LeisureSliderItem/>
        <LeisureSliderItem/>
        <LeisureSliderItem/>
        <LeisureSliderItem/>
        <LeisureSliderItem/>
        <LeisureSliderItem/>
        <LeisureSliderItem/>
      </List>
    </div>
  );
}
