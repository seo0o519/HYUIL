"use client";
import React, { useState } from "react";
import Img from "./hotel.png";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";


export default function MediumListItem(){
    return (
        <div className="w-[154px] h-[178px] ">
            <img src={Img.src} className="h-[110px] rounded-[4px] w-full" />
            <div className="w-full font-semibold text-[16px] pt-[8px]">강릉 모던 프라이빗 <br/>공간 | 휴휴가</div>
            <div className="w-full f-[16px] text-[12px] text-gray-400 pt-[4px]">강릉시 황리단 민속마을</div>
        </div>
    );
}
