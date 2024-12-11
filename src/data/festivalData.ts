export interface festivalDataType {
  id: number;
  name: string;
  image: string;
  start_date: string;
  end_date: string;
  place: string;
  rdnm_adr: string;
  telephone: string;
  description: string;
  parking_lot: boolean;
  url: string;
  ocean: boolean;
  mountain: boolean;
}
export const festivalData: festivalDataType[] = [
  {
    id: 1,
    name: "춘천에서 통하나봄",
    image: "/assets/images/mockimg/festival1.png",
    start_date: "2024-10-15",
    end_date: "2024-10-18",
    place: "강릉대도호부관아",
    rdnm_adr: "강원특별자치도 춘천시 삼천동 200-9",
    telephone: "010-4077-3416",
    description: `[춘천에서 통하나봄]은 통일에 대한 국민들의 관심을 높이고 모두가 함께 즐기고 체험할 수 있도록 통일부가 준비한 문화행사이다. 이번 [춘천에서 통하나봄]은 강원권 통일플러스센터 개관을 기념해 개관식과 함께 진행되며, 행사장 내 다채로운 체험 및 이벤트 프로그램과 개관 기념 이벤트 등 다양한 문화 콘텐츠가 제공된다.`,
    parking_lot: false,
    url: "https://www.naver.com/",
    ocean: false,
    mountain: true,
},
{
  id: 2,
  name: "고니골빛축제",
  image: "/assets/images/mockimg/festival2.png",
  start_date: "2024-11-23",
  end_date: "2025-02-02",
  place: "양잠테마단지 내",
  rdnm_adr: "강원 원주시 호저면 호저로 1277-43",
  telephone: "033-731-9588",
  description: `양잠농가의 겨울비수기를 통한 일자리 창출과 넓은농장을 이용 힐링을 주는 보는즐거움인 빛과 더불어 아이들 겨울놀거리로 썰매타기체험, 누에실뽑기체험외/ 뽕나무와 뽕잎, 오디를 이용한 먹거리도 즐길수 있도록 활용하였다.`,
  parking_lot: true,
  url: "https://www.gonigol.co.kr/main/index",
  ocean: false,
  mountain: true
},
{
  id: 3,
  name: "강릉 커피축제",
  image: "/assets/images/mockimg/festival3.png",
  start_date: "2024-10-24",
  end_date: "2024-10-27",
  place: "강릉커피거리 및 강릉시 일원",
  rdnm_adr: "강원 강릉시 창해로14번길 20-1",
  telephone: "033-731-1158",
  description: `강원도 강릉은 한국에서 유일하게 차문화유적지가 남아있는 도시이자 유명 바리스타들이 자리를 잡고 활동하고 있는 한국 커피의 중심지이다.강릉에서 매년 가을, 향긋한 커피향과 함께하는 강릉커피축제를 개최하고 있다.아름다운 강릉에서 바다를 바라보며 커피 한 잔의 여유를 즐길 수 있다.`,
  parking_lot: true,
  url: "http://ggcoffeestreet.modoo.at/",
  ocean: true,
  mountain: false
},
{
  id: 4,
  name: "얼음나라 화천 산천어 축제",
  image: "/assets/images/mockimg/festival4.png",
  start_date: "2025-01-11",
  end_date: "2025-02-02",
  place: "화천천",
  rdnm_adr: "강원 화천군 화천읍 산천어길 137",
  telephone: "1688-3005",
  description: `강원특별자치도 화천에서 열리는 얼음나라화천 산천어축제는 2011년 미국 CNN이 선정한 '겨울의 7대 불가사의' 중 하나로 꼽힌 이색 겨울축제다. 물 맑기로 유명한 화천천이 꽁꽁 얼어붙는 매년 1월에 축제가 열리며 얼음낚시, 맨손잡기 등으로 계곡의 여왕이라고 불리는 산천어를 잡는 체험을 할 수 있다. 산천어 얼음낚시의 손맛은 물론 바로 회나 구이로 맛있게 먹을 수 있고 낚시 외에도 얼음썰매, 눈썰매, 봅슬레이 등의 다양한 겨울놀이가 펼쳐져 매년 100만명 이상이 방문하고 있다.`,
  parking_lot: true,
  url: "https://www.narafestival.com/01_icenara/",
  ocean: false,
  mountain: true
},
{
  id: 5,
  name: "정선 아리랑제",
  image: "/assets/images/mockimg/festival5.png",
  start_date: "2024-10-02",
  end_date: "2024-12-25",
  place: "정선 공설운동장",
  rdnm_adr: "강원 정선군 정선읍 봉양리 104",
  telephone: "1688-3005",
  description: `정선아리랑의 전승과 보존을 목적으로 시작된 정선아리랑제는 정선아리랑 보유자의 공연을 비롯해 다양한 장르의 공연과 민속 시연·체험이 가능한 축제이다. 아리랑의 진면모와 현대적으로 해석된 아리랑의 새로운 모습을 보여준다.`,
  parking_lot: false,
  url: "https://www.arirangfestival.kr/",
  ocean: false,
  mountain: true
},
];

export default festivalData;
