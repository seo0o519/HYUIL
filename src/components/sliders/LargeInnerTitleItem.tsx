import Image from "next/image";
import tempImage from "../../../public/tempImage.png";

interface LargeInnerTitleItemProps {
  title?: string;
  subtitle?: string;
  //   imgurl?: string;
}

function LargeInnerTitleItem({
  title,
  subtitle,
  //   imgurl,
  ...props
}: LargeInnerTitleItemProps) {
  return (
    <div className="relative border-black rounded-[12px] w-[327.84px] h-[210px] overflow-hidden">
      <Image
        alt={"backgroundImg"}
        layout="fill"
        src={tempImage}
        objectFit="cover"
      />
      <div className="flex flex-col absolute justify-end items-start w-full h-[109px] px-2 pb-6 bg-gradient-to-t from-black z-10  bottom-0 rounded-b-[12px]">
        <div className="flex justify-center items-center rounded-[4px] w-[44px] h-[20px] mb-1 bg-[#22AFFF]">
          <span className="text-white text-[10px] font-semibold">핫 이슈</span>
        </div>
        <span className="text-white text-[18px] font-extrabold">
          {title && title}✨
        </span>
        <div className="flex flex-row">
          <span className="text-white text-[12px]">{subtitle && subtitle}</span>
        </div>
      </div>
    </div>
  );
}

export default LargeInnerTitleItem;
