import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  label?: string;
}

function InfoButton({ label }: ButtonProps) {
  return (
    <button
      type="button"
      className="flex justify-center items-center w-fit px-3 rounded-full bg-white/25"
    >
      {label}
    </button>
  );
}

export default InfoButton;
