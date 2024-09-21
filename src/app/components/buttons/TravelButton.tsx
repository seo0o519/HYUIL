import { ButtonHTMLAttributes } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

interface ButtonProps {
  label?: string;
  url?: string;
}

function TravelButton({ label, url }: ButtonProps) {
  return (
    <Link
      href={url || ""}
      className="flex justify-center items-center w-fit px-5 gap-2 p-3  rounded-full shadow-md shadow-[#eaeaea]"
    >
      {label}
      <FaChevronRight />
    </Link>
  );
}

export default TravelButton;
