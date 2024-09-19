import { ButtonHTMLAttributes } from "react";
import { FaChevronRight } from "react-icons/fa6";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  
}

function TravelButton({}:ButtonProps) {
  return (
    <button type="button" className="flex justify-center items-center gap-2 p-3 border border-[#e3e3e3] rounded-full drop-shadow-lg">
      여행지 검색
      <FaChevronRight />
    </button>
  );
}

export default TravelButton;