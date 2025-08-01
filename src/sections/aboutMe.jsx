import Tech from "../components/tech";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";
import { PiFigmaLogoLight } from "react-icons/pi";
import { SiAstro } from "react-icons/si";

function AboutMe() {
  const techsList = [
    {
      icon: <BiLogoHtml5 aria-label="true" />,
      text: "HTML5",
    },
    {
      icon: <BiLogoCss3 aria-label="true" />,
      text: "CSS3",
    },
    {
      icon: <BiLogoBootstrap aria-label="true" />,
      text: "Bootstrap",
    },
    {
      icon: <BiLogoTailwindCss aria-label="true" />,
      text: "Tailwind",
    },
    {
      icon: <BiLogoJavascript aria-label="true" />,
      text: "JavaScript",
    },
    {
      icon: <BiLogoTypescript aria-label="true" />,
      text: "TypeScript",
    },
    {
      icon: <BiLogoReact aria-label="true" />,
      text: "React",
    },
    {
      icon: <SiAstro aria-label="true" />,
      text: "Astro",
    },
    {
      icon: <BiLogoGit aria-label="true" />,
      text: "Git",
    },
    {
      icon: <BiLogoGithub aria-label="true" />,
      text: "GitHub",
    },
    {
      icon: <PiFigmaLogoLight aria-label="true" />,
      text: "Figma",
    },
  ];

  return (
    <section
      className="
        w-full
        flex flex-col 
        justify-between items-center 
        px-5 md:px-10 xl:px-15 2xl:px-20
        py-5 md:pb-10 xl:py-10
        space-y-5
      "
    >
      <div
        className="
          w-full 
          flex flex-col
          items-center
          space-y-5
        "
      >
        <h2 className="text-2xl">Sobre mim</h2>
        <p className="text-justify text-lg indent-4">
          Iniciei minha jornada na programação em 2020, desde então, adquiri
          bastante conhecimento em diversas tecnologias de Front-End, como{" "}
          <span>HTML5</span>, <span>CSS3</span>, <span>Bootstrap</span>,{" "}
          <span>TailwindCSS</span>, <span>JavaScript</span> e <span>React</span>
          , além de habilidades com as ferramentas <span>Git</span> e{" "}
          <span>GitHub</span>, conhecimentos em <span>UI/UX Design</span> e{" "}
          <span>Figma</span>. Atualmente, estou me aprofundando ainda mais em{" "}
          <span>React</span> e <span>TailwindCSS</span>, criando interfaces
          modernas e responsivas, e também focado no estudo em{" "}
          <span>Astro</span>, <span>TypeScript</span> e na criação de API’s
          usando <span>NodeJS</span>. Meu objetivo é me tornar um desenvolvedor
          diferenciado, com disposição para enfrentar diversos desafios ao longo
          da minha carreira, para que, cada vez mais, eu evolua como
          desenvolvedor e me torne um profissional diferenciado e disputado no
          mercado. No momento, busco a primeira oportunidade de estágio na área
          de desenvolvimento Front-End.
        </p>
      </div>

      <div
        className="
          w-full
          flex flex-wrap
          justify-between
        "
      >
        {techsList.map((item, index) => (
          <Tech key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
}

export default AboutMe;
