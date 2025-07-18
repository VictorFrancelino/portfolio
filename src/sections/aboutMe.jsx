import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoGit,
  BiLogoGithub,
} from "react-icons/bi";
import Tech from "../components/tech";

function AboutMe() {
  const techsList = [
    {
      icon: <BiLogoHtml5 />,
      text: "HTML5",
    },
    {
      icon: <BiLogoCss3 />,
      text: "CSS3",
    },
    {
      icon: <BiLogoBootstrap />,
      text: "Bootstrap",
    },
    {
      icon: <BiLogoTailwindCss />,
      text: "Tailwind",
    },
    {
      icon: <BiLogoJavascript />,
      text: "JavaScript",
    },
    {
      icon: <BiLogoReact />,
      text: "React",
    },
    {
      icon: <BiLogoGit />,
      text: "Git",
    },
    {
      icon: <BiLogoGithub />,
      text: "GitHub",
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
          Sou um estudante apaixonado por aprender sobre Tecnologia,
          especialmente no campo da programação. Iniciei minha jornada em 2020
          e, desde então, adquiri bastante conhecimento em diversas tecnologias
          de front-end, como <span>HTML5</span>, <span>CSS3</span>,{" "}
          <span>Bootstrap</span>, <span>JavaScript</span> e <span>React</span>,
          além de habilidades com as ferramentas <span>Git</span> e{" "}
          <span>GitHub</span>. Atualmente, estou me aprofundando ainda mais em{" "}
          <span>React</span> e <span>Tailwind</span>, criando interfaces
          modernas e responsivas, e também focado no estudo da criação de APIs
          usando <span>NodeJS</span>. Meu objetivo é me tornar um desenvolvedor
          diferenciado, aplicando minha criatividade e competências técnicas
          para solucionar problemas complexos com eficiência.
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
