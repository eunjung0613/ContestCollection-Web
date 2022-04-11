export interface IService {
  id: number;
  name: string;
  award: string;
  subTitle: string;
  summary: string;
  category: string[];
  img: string;
  people: string[];
  calendar: string[];
  githubLink: string;
  youtubeLink: string;
  serviceLink: string;
  skills: string[];
}

interface IServiceObject {
  [name: string]: IService;
}

const serviceList: IService[] = [
  {
    id: 0,
    name: "BOOKREST",
    award: "2021년 은상, 인기상",
    subTitle:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. 매 학기마다 전공책을 새로 구매하시나요? 구매하셨다면 가격이 부담스럽지 않으셨나요? BOOKREST는 대학생의, 대학생에 의한, 대학생들을 위해 만들었습니다. BOOK + FOREST = 전공서적을 무료로 쉽게 대여할 수 있는 공유의 숲이라는 뜻으로 저희 BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다. 💡 모든 학과, 모든 학년, 모든 과목의 학기마다 필요한 전공서적을 교내에 여러권 비치하여 책 정보와 수업 정보까지 BOOKREST에서 확인 가능합니다. 👊🏻 BOOKREST는 대여비용이 무료입니다. 일부 보증금 제도를 통해 책의 분실 및 손상 규정에 따라 비용이 청구 될 수 있지만 대여기간과 규정을 잘 지킨다면 누구나 무료로 이용할 수 있습니다.",
    category: ["IT"],
    img: "https://user-images.githubusercontent.com/63100352/161198107-0e5ee70d-4949-45ec-b331-8cedf9d8be87.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    calendar: [
      "2021.4 ~ 5: 아이디어 회의",
      "6: 페이지 및 DB 구상",
      "7 ~ 8: 개발 및 배포",
    ],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
    youtubeLink: "https://youtu.be/VpKfXxeuBDQ",
    serviceLink: "https://sharebookrest.herokuapp.com/",
    skills: ["HTML", "JavaScript", "Django", "SQLite", "Heroku"],
  },
  {
    id: 1,
    name: "Air-Alarm",
    award: "2021년 대상, 인기상",
    subTitle: "실시간 미세먼지 및 공기질 측정기",
    summary:
      "Air-Alarm은 미세먼지, Co2, 온도, 습도를 측정해주는 공기질 측정기입니다. 기상청 공기질 데이터까지 제공하고 있어, 우리집 공기질과 우리 동네 공기질을 비교하여 볼 수도 있습니다. 기존의 공기질 측정기에 비해 저렴한 가격과 다양한 기능으로 차별화를 이룬 제품입니다.",
    category: ["IT"],
    img: "https://avatars.githubusercontent.com/u/87899594?s=200&v=4",
    people: ["손창하", "고병우", "김하은", "박진희"],
    calendar: ["2021.6: 아이디어 회의", "7 ~ 8: 개발 및 배포"],
    githubLink: "https://github.com/Air-Alarm",
    youtubeLink: "https://youtu.be/v_4Lv-mid30",
    serviceLink: "미등록",
    skills: ["Flask", "SQLite", "Swift"],
  },
  {
    id: 2,
    name: "유저 트레이더스",
    award: "2021년 은상",
    subTitle: "중고 거래 서비스",
    summary:
      "회원이라는 의미의 user + 상인, 거래라는 의미의 Traders를 합쳐 사용자나 회원이 직접 상인이 되어 거래한다라는 의미를 가진 성공회대 중고거래 서비스 유저 트레이더스입니다.",
    category: ["IT"],
    img: "https://i.postimg.cc/pdr9zbVj/image.png",
    people: ["정재빈", "박형준"],
    calendar: [
      "2021.4 ~ 5: 아이디어 회의",
      "6: 페이지 및 DB 구상",
      "7 ~ 8: 개발 및 배포",
    ],
    githubLink: "미등록",
    youtubeLink: "https://youtu.be/5fMI9WA99kk",
    serviceLink:
      "http://eks-work-frontend-skhu.s3-website.ap-northeast-2.amazonaws.com/",
    skills: ["Spring Boot", "JPA", "Jpql", "Querydsl"],
  },
  {
    id: 3,
    name: "컴비",
    award: "2021년 장려상",
    subTitle: "인공지능 수화 번역 시스템",
    summary:
      "인공지능이 크게 발달해 많은 제품에 인공지능이 탑재되고 있지만, 장애인을 위한 제품은 아직도 부족한 편입니다. 컴비는 청각 장애인과 비장애인 간의 의사소통의 벽을 허물고자 개발된 실시간 수어 인식 시스템입니다.",
    category: ["IT"],
    img: "https://i.postimg.cc/W1XFdbVj/image.png",
    people: ["김기범"],
    calendar: ["미등록"],
    githubLink: "https://github.com/gibum1228/ComputerVision",
    youtubeLink: "https://youtu.be/Nf7Rrg3ASh0",
    serviceLink: "미등록",
    skills: ["Open CV", "CUDA"],
  },
  {
    id: 4,
    name: "GITY",
    award: "2021년 동상",
    subTitle: "유튜브 이미지 크롤링 시스템",
    summary:
      "최근 인공지능이 큰 이슈로 자리잡고있습니다. 이 인공지능을 학습시키기 위해서는 데이터가 필수적인데, 여러 인공지능들이 데이터 부족으로 고충을 겪고 있습니다. GITY는 유튜브를 이용해 이미지 데이터를 가져와 데이터로 제공해주어 데이터 부족을 해결하고자 합니다.",
    category: ["IT"],
    img: "https://i.postimg.cc/YSPvxnjs/image.png\n",
    people: ["정민혁", "이제헌", "박결"],
    calendar: ["미등록"],
    githubLink: "https://github.com/kyeul611/gity",
    youtubeLink: "https://youtu.be/rQX4ZPzPiqA",
    serviceLink: "미등록",
    skills: ["TensorFlow", "YOLO", "Selenium"],
  },
  {
    id: 5,
    name: "ENCHANT-SHOOTER",
    award: "2021년 동상",
    subTitle: "최대한 오래 살아남아 포인트를 높여라!",
    summary:
      "맵 곳곳에서 무한히 쏟아지는 귀여운 몬스터, 몬스터를 처치해 얻는 고유한 특징의 속성 탄환, 콜로세움 스타일의 맵에서 벌어지는 생존싸움, 화려하고 중독성있는 그래픽효과, 캐주얼하게 움직이며 총을 쏘는 run&gun 스타일이라는 특징을 가진 슈팅게임 Enchant Shooter입니다.",
    category: ["IT"],
    img: "https://i.postimg.cc/DZb8prXy/image.png\n",
    people: ["김승기", "이유나"],
    calendar: ["미등록"],
    githubLink: "미등록",
    youtubeLink: "https://youtu.be/IpNcAQIRVZk",
    serviceLink: "미등록",
    skills: ["Unity"],
  },

  {
    id: 6,
    name: "the pad",
    award: "2021년 장려상",
    subTitle: "2D 애니메이션 아이패드에 대한 로망",
    summary:
      "아이패드를 가지고 싶어하는 마음을 상상력으로 풀어냄으로써 아이패드를 가지고 싶은 심정을 재미있게 표현하고 보는 이에게 재미와 공감을 느낄 수 있도록 제작한 애니메이션 the pad입니다.",
    category: ["IT"],
    img: "https://i.postimg.cc/XY3dZzyK/image.png\n",
    people: ["김지인", "채나연"],
    calendar: ["2021.9: 디자인", "10: 소스 제작 및 편집"],
    githubLink: "미등록",
    youtubeLink: "https://youtu.be/MDd2yRxpFGg",
    serviceLink: "미등록",
    skills: ["Photoshop", " After Effects"],
  },

  {
    id: 7,
    name: "청약패스",
    award: "2021년 금상, 인기상",
    subTitle: "청약자격 여부 점검 서비스",
    summary:
      "청약패스는 '청약'과 '통과'의 합성어로, 복잡한 청약 시스템의 틀을 깨고 청약패스의 자격 점검 시스템을 통해 부적격 없이 한번에 청약에 당첨되었으면 하는 바람이 깃든 팀, 서비스명입니다. 핵심 기능으로는 청약 자격 여부 점검, 가/배점계산, 부적격 사례 및 FAQ제공이 있습니다.",
    category: ["IT"],
    img: "https://i.postimg.cc/76Fh75bG/image.png",
    people: ["한지혜", "신수연", "박지우", "이지은"],
    calendar: [
      "2021.3: 청약 제도 학습",
      "2021.4: 프로젝트 진행 계획, 기능 및 와이어프레임 제작",
      "2021.5: 백: 데이터베이스 구축, 프론트: 디자인 설계",
      "2021.6~8: 개발",
      " 2021.9~11: 테스트 진행 , 유지보수",
    ],
    githubLink: "https://github.com/devUnnies/chungyakpass",
    youtubeLink: "https://youtu.be/l2FzUBb-25Y",
    serviceLink: "http://localhost:3000/sds",
    skills: [
      "SpringBoot",
      "SpringDataJpa",
      "Spring Security",
      "React",
      "axios",
    ],
  },

  {
    id: 8,
    name: "나만의 웹 다이어리",
    award: "2021년 동상",
    subTitle: "일정, 계획, 시간표, 버킷리스트 등을 기록하는 나만의 웹 다이어리",
    summary:
      "하루 일정, 일주일 계획, 시간표, 버킷 리스트, 일기, 메모장을 기록하는 나만의 웹 다이어리입니다. 실물 다이어리는 잊어버리거나, 아이디어가 떠올라도 다이어리를 찾다가 잊어버리는 아쉬움을 해결하기 위해 만들게 된 프로젝트입니다.",
    category: ["IT"],
    img: "https://i.postimg.cc/9MJw7mZy/image.png",
    people: ["김보미", "임수빈"],
    calendar: [
      "2021.3: 주제 설정 및 구현",
      "4~6: 구현",
      "9: 코드 보완 및 정리",
    ],
    githubLink: "미등록",
    youtubeLink: "hhttps://youtu.be/D0JQ6j1O6L8",
    serviceLink: "미등록",
    skills: ["SpringBoot", "JSP", "MySQL"],
  },

  {
    id: 9,
    name: "Gifty",
    award: "2021년 장려상",
    subTitle: "기프티콘 관리 앱",
    summary:
      "다들 한번쯤은 기프티콘으로 선물을 주거나 받아본 경험이 있을 것입니다. 카카오톡 선물하기를 통해 선물을 하게 되면 카카오톡 보관함에 저장이 되어 관리가 가능하지만, 내가 사용하지 않는 기프티콘을 양도하거나, 카카오톡이 아닌 다른 플랫폼에서 생성된 기프티콘은 캡처된 사진으로 저장하는 경우가 많습니다. 이런 경우 갤러리를 하나하나 찾아봐야하는 불편함이 있습니다. Gifty는 이러한 불편함을 해결하고자 기획된 어플리케이션입니다.",
    category: ["IT"],
    img: "hhttps://i.postimg.cc/dQb8F1sx/image.png",
    people: ["주동석"],
    calendar: ["2021.9 ~ 10: 개발"],
    githubLink: "미등록",
    youtubeLink: "https://youtu.be/A_oeMPVDJfY",
    serviceLink: "미등록",
    skills: ["Apple Vision Framework"],
  },

  {
    id: 10,
    name: "성공회대 기자재대여시스템",
    award: "미등록",
    subTitle: "성공회대학교 기자재 대여 관리 시스템",
    summary:
      "교내의 다양한 기자재(교재, 사물함, 노트북 등)의 대여 및 반납 기능을 지원하는 웹 서비스입니다. 교내에 넘쳐나는 방치된 교재를 체계적으로 재사용하기 위해 기획되었습니다.",
    category: ["SW경진대회"],
    img: "https://i.postimg.cc/SxyYQYwD/image.png",
    people: ["김윤서", "김문수"],
    calendar: ["미등록"],
    githubLink: "https://github.com/nn98/ReeBook",
    youtubeLink: "https://youtu.be/ZvTbZSRFcTU",
    serviceLink: "미등록",
    skills: ["MySQL Spring"],
  },

  {
    id: 11,
    name: "성공회대 출석체크",
    award: "2020년 동상",
    subTitle: "성공회대 QR코드 출석 체크",
    summary:
      "교수와 학생 모두가 출석체크를 편하게 하기 위해 만들어진 시스템으로, 교수가 성공회대 출석체크 웹페이지를 통해 자신의 과목 QR 코드를 띄우면 학생이 어플을 통해 스캔하여 출석체크를 할 수 있는 시스템입니다.",
    category: ["SW경진대회"],
    img: "https://i.postimg.cc/YCzFHz0X/image.png",
    people: ["정은애"],
    calendar: ["미등록"],
    githubLink: "https://github.com/Jungea/QRCheck",
    youtubeLink: "https://youtu.be/30qy2W7MbPU",
    serviceLink: "미등록",
    skills: ["JPA", "Jquery", "Spring", "Bootstrap"],
  },

  {
    id: 12,
    name: "냉장고를 부탁해",
    award: "2020년 은상",
    subTitle: "안드로이드 기반 냉장고 관리 시스템",
    summary:
      "기존의 냉장고에 관리기능 하나 추가된것 만으로 가격이 급격하게 높아진다는 단점을 해결하고자, 안드로이드 어플리케이션을 이용해 보급형으로 제작해 다양한 사용자가 이용할 수 있도록 제작한 앱입니다.",
    category: ["SW경진대회"],
    img: "https://i.postimg.cc/J4jjzLt4/image.png",
    people: ["김기범", "김은정"],
    calendar: ["미등록"],
    githubLink: "https://github.com/gibum1228/Care_Refrigerator",
    youtubeLink: "https://youtu.be/xWzlHa644Ek",
    serviceLink: "미등록",
    skills: ["Firebase", "Java"],
  },

  {
    id: 13,
    name: "Calcuator",
    award: "2019년 은상",
    subTitle: "미등록",
    summary: "미등록",
    category: ["SW경진대회"],
    img: "미등록",
    people: ["강인성"],
    calendar: ["미등록"],
    githubLink: "미등록",
    youtubeLink: "미등록",
    serviceLink: "미등록",
    skills: ["미등록"],
  },
];

export const objectedService: IServiceObject = {};

serviceList.forEach((service) => {
  objectedService[service.name] = service;
});

interface IObjectedService {
  [categoryName: string]: IService[];
}

const objectedServiceByCategory: IObjectedService = {
  IT: [],
  미디어컨텐츠: [],
  SW경진대회: [],
};

serviceList.forEach((service) => {
  service.category.forEach((category) => {
    objectedServiceByCategory[category].push(service);
  });
});

export default objectedServiceByCategory;
