import ViewMoreOfficeItem from "@/components/common/ViewMoreOfficeItem";
import ViewMoreResidenceItem from "@/components/common/ViewMoreResidenceItem";
import { GrPrevious } from "react-icons/gr";


const officedatas = [
  {imgurl:"/hotelImage.png", address:"강릉", name:"경포그네터", wifi: true, parkinglot: true, time:"8:00~18:00", liked:false, popular:true, mountain:false, ocean:true},
]

const residencedatas = [
  {imgurl:"/hotelImage.png", address:"강릉", name:"경포그네터", wifi: true, parkinglot: true, capacity:5, liked:false, popular:true, mountain:false, ocean:true},
]

export default function More() {
  return (
    <div className="w-full">
        <div className="flex items-center p-[14px] border-b border-[#ededed] sticky top-0 bg-white z-10">
          <GrPrevious className="w-[20px] h-[20px] text-gray-600" />
          <p className="text-title2 mx-[10px]">직장인이 꿈꾸는 워케이션</p>
        </div>
        {officedatas.map((data, index) => (
            <ViewMoreOfficeItem
              key={index}
              imgurl={data.imgurl}
              address={data.address}
              name={data.name}
              parkinglot={data.parkinglot}
              wifi={data.wifi}
              time={data.time}
              liked={data.liked}
              popular={data.popular}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
        {residencedatas.map((data, index) => (
            <ViewMoreResidenceItem
              key={index}
              imgurl={data.imgurl}
              address={data.address}
              name={data.name}
              parkinglot={data.parkinglot}
              wifi={data.wifi}
              capacity={data.capacity}
              liked={data.liked}
              popular={data.popular}
              mountain={data.mountain}
              ocean={data.ocean}

            />
        ))}
    </div>
  );
}
