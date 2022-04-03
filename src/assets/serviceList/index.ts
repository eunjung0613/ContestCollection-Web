export interface IService {
  name: string;
  award: string;
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
    name: "BOOKREST",
    award: "은상, 인기상 수상",
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
    name: "IT경진대회1",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["IT"],
    img: "https://user-images.githubusercontent.com/63100352/161386331-f5d10895-0d7c-4a05-9b53-d60ed3881c3c.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    calendar: [
      "2021.4 ~ 5: 아이디어 회의",
      "6: 페이지 및 DB 구상",
      "7 ~ 8: 개발 및 배포",
    ],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
    youtubeLink: "https://youtu.be/VpKfXxeuBDQ",
    serviceLink: "https://sharebookrest.herokuapp.com/",
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "IT경진대회2",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["IT"],
    img: "https://user-images.githubusercontent.com/63100352/161386343-54019f2d-cb12-4a6d-9572-9055c18f80a4.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    calendar: [
      "2021.4 ~ 5: 아이디어 회의",
      "6: 페이지 및 DB 구상",
      "7 ~ 8: 개발 및 배포",
    ],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
    youtubeLink: "https://youtu.be/VpKfXxeuBDQ",
    serviceLink: "https://sharebookrest.herokuapp.com/",
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "IT경진대회3",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
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
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "IT경진대회4",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
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
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "미디어",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["미디어컨텐츠"],
    img: "https://user-images.githubusercontent.com/63100352/161386343-54019f2d-cb12-4a6d-9572-9055c18f80a4.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    calendar: [
      "2021.4 ~ 5: 아이디어 회의",
      "6: 페이지 및 DB 구상",
      "7 ~ 8: 개발 및 배포",
    ],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
    youtubeLink: "https://youtu.be/VpKfXxeuBDQ",
    serviceLink: "https://sharebookrest.herokuapp.com/",
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "미디어1",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["미디어컨텐츠"],
    img: "https://user-images.githubusercontent.com/63100352/161386331-f5d10895-0d7c-4a05-9b53-d60ed3881c3c.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    calendar: [
      "2021.4 ~ 5: 아이디어 회의",
      "6: 페이지 및 DB 구상",
      "7 ~ 8: 개발 및 배포",
    ],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
    youtubeLink: "https://youtu.be/VpKfXxeuBDQ",
    serviceLink: "https://sharebookrest.herokuapp.com/",
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "미디어2",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["미디어컨텐츠"],
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
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "SW경진대회1",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["SW경진대회"],
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
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
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
