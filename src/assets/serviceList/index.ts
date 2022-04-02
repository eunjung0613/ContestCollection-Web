export interface IService {
  name: string;
  award: string;
  summary: string;
  category: string[];
  img: string;
  people: string[];
  githubLink: string;
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
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["IT"],
    img: "https://user-images.githubusercontent.com/63100352/161198107-0e5ee70d-4949-45ec-b331-8cedf9d8be87.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "IT경진대회1",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["IT"],
    img: "https://user-images.githubusercontent.com/63100352/161386331-f5d10895-0d7c-4a05-9b53-d60ed3881c3c.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
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
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
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
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
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
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
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
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
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
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
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
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "UserTracers",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["SW경진대회"],
    img: "https://user-images.githubusercontent.com/63100352/161198107-0e5ee70d-4949-45ec-b331-8cedf9d8be87.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
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
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
    skills: ["HTML", "JavaScript", "Django", "Heroku"],
  },
  {
    name: "SW경진대회2",
    award: "은상, 인기상 수상",
    summary:
      "BOOKREST는 전공서적을 대여해주는 서비스입니다. BOOKREST에서 쉽고 편하게 원하는 책을 대여하시길 바랍니다.",
    category: ["SW경진대회"],
    img: "https://user-images.githubusercontent.com/63100352/161198107-0e5ee70d-4949-45ec-b331-8cedf9d8be87.png",
    people: ["유하성", "김지인", "윤다혜", "한슬희"],
    githubLink: "https://github.com/SKHU-Likelion-9th/BOOKREST",
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
