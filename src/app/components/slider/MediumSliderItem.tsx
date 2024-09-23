import Image from "next/image";
import tmp from "../../../../public/tmp.jpg";

interface MediumSliderItemProps {
  label?: string;
  imgurl?: string;
  addr?: string;
  children?: React.ReactElement;
}

function MediumSliderItem({
  label,
  imgurl,
  addr,
  children,
  ...props
}: MediumSliderItemProps) {
  return (
    <div className="border w-[208px] h-fit flex-row">
      <div className="border-black rounded-[12px] w-[208px] h-[135px] relative overflow-hidden mb-[8px]">
        <Image
          alt={"backgroundImg"}
          layout="fill"
          src={tmp}
          objectFit="cover"
        />
      </div>
      <span className="text-[16px] block border">{label && label}</span>
      <span className="h-fit text-[12px] text-[#999999]">{addr && addr}</span>
    </div>
  );
}

export default MediumSliderItem;
