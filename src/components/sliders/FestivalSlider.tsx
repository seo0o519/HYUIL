"use client";
import React, { useState } from "react";
import Img from "./hotel.png";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";


function FestivalSliderItem(){
    return (
      <ListItem sx={{padding: "4px"}}>
        <div className="w-[140px] h-[153px]">
            <img src={Img.src} className="h-[105px] rounded-md w-full" />
            <div className="w-full font-semibold text-[16px] pt-2">강릉 모던 프라이빗</div>
        </div>
      </ListItem>
    );
}

export default function FestivalSlider() {

  
  return (
    <div>
      <div className="flex justify-between "><p className="text-[20px] font-bold p-1">강릉의 가을 축제</p> <button className="text-[12px] p-1 text-gray-600">더보기 > </button></div>
      <List className="flex items-center flex-row w-full h-full relative overflow-auto pt-1" sx={{scrollbarWidth: "none"}}>
        <FestivalSliderItem/>
        <FestivalSliderItem/>
        <FestivalSliderItem/>
        <FestivalSliderItem/>
        <FestivalSliderItem/>
        <FestivalSliderItem/>
        <FestivalSliderItem/>
        <FestivalSliderItem/>
      </List>
    </div>
  );
}
