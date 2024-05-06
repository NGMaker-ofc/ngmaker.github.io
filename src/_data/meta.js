let productionURL = "https://ngmaker-ofc.github.io";
let developmentURL = "http://localhost:8080";

module.exports = {
  siteName: "NGMaker",
  description:
    "A NG Maker surgiu com o proposito de unir a necessidade da qualidade audiovisual publicitária de alto padrão, ao objetivo de entregar o melhor e assim impulsionar a imagem dos que confiam em nossos serviços.",
  contactMessage:
    "Nós podemos proporcionar um serviço excepcional para você! Não deixe de entrar em contato pelo WhatsApp abaixo:",
  whatsapp: "+55 (11) 94447-7942",
  url: process.env.ELEVENTY == "production" ? productionURL : developmentURL,
  env: process.env.ELEVENTY || "development",
  projects: [
    {
      src: "/assets/images/projects/1.webp",
      title: "Evento de Carro",
      description: "Gravação em suzano",
      link: "https://www.instagram.com/p/C5lEk2bOnip/",
    },
    {
      src: "/assets/images/projects/2.webp",
      title: "Foto profissional",
      description: "Qualquer ambiente",
      link: "https://www.instagram.com/p/Csl7pdqJwnw/",
    },
    {
      src: "/assets/images/projects/3.webp",
      title: "Gravações de eventos",
      description: "Tudo em 4k",
      link: "https://www.instagram.com/p/Cs8oiLGOt2L/",
    },
    {
      src: "/assets/images/projects/2.webp",
      title: "Foto profissional",
      description: "Qualquer ambiente",
      link: "https://www.instagram.com/p/Csl7pdqJwnw/",
    },
    {
      src: "/assets/images/projects/1.webp",
      title: "Evento de Carro",
      description: "Gravação em suzano",
      link: "https://www.instagram.com/p/C5lEk2bOnip/",
    },
    {
      src: "/assets/images/projects/3.webp",
      title: "Gravações de eventos",
      description: "Tudo em 4k",
      link: "https://www.instagram.com/p/Cs8oiLGOt2L/",
    },
  ],
  author: {
    name: "Nathan Gomes",
    avatar: "/assets/images/author.webp",
    bio: "Com mais de 10 anos de experiência, sou especialista em produções audiovisuais de alto padrão, abrangendo desde edições e captações até fotografia e design, com expertise nos setores fotográficos, audiovisuais, e publicitários.",
    instagram: "https://www.instagram.com/nathangomesz/",
  },
};
