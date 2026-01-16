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
  BiLogoNodejs,
} from "react-icons/bi";
import { PiFigmaLogoLight } from "react-icons/pi";
import { SiAstro, SiJest } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";

function AboutMe() {
  const stacks = {
    frontend: [
      { icon: <BiLogoHtml5 />, text: "HTML5" },
      { icon: <BiLogoCss3 />, text: "CSS3" },
      { icon: <BiLogoReact />, text: "React" },
      { icon: <SiAstro />, text: "Astro" },
      { icon: <BiLogoTailwindCss />, text: "Tailwind" },
      { icon: <BiLogoBootstrap />, text: "Bootstrap" },
    ],
    core: [
      { icon: <BiLogoJavascript />, text: "JavaScript" },
      { icon: <BiLogoTypescript />, text: "TypeScript" },
      { icon: <BiLogoNodejs />, text: "Node.js" },
      { icon: <IoCodeSlash />, text: "Compiladores" },
    ],
    tools: [
      { icon: <SiJest />, text: "Jest" },
      { icon: <BiLogoGit />, text: "Git" },
      { icon: <BiLogoGithub />, text: "GitHub" },
      { icon: <PiFigmaLogoLight />, text: "Figma" },
    ],
  };

  const renderTechCategory = (title, list) => (
    <div className="w-full flex flex-col items-center gap-6 mb-8 last:mb-0">
      <h3 className="text-xl text-pink font-bold border-b-2 border-pink pb-2 px-8">
        {title}
      </h3>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
        {list.map((item, index) => (
          <Tech key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full flex flex-col items-center px-5 md:px-10 xl:px-20 py-10 space-y-16">
      <div className="w-full max-w-4xl flex flex-col items-center space-y-6">
        <h2 className="text-2xl">Sobre mim</h2>
        <p className="text-justify text-lg indent-6">
          Iniciei minha jornada na programação em 2020 e, desde então, venho evoluindo do desenvolvimento visual para uma compreensão mais profunda da engenharia de software. Construí uma base sólida em tecnologias Front-End como <span>HTML5, CSS3, JavaScript</span> e <span>React</span>, além de integrar conhecimentos de <span>UI/UX Design</span> e <span>Figma</span> para criar interfaces modernas e responsivas. Atualmente, estou expandindo meus horizontes técnicos ao me aprofundar em <span>TypeScript</span>, <span>Astro</span> e na construção de APIs com <span>Node.js</span>. Minha trajetória é marcada por desafios práticos: no projeto <span>Delégua</span>, venho ganhando maturidade ao lidar com um sistema de grande escala e testes automatizados com <span>Jest</span>. Já com o <span>SimpleScript</span>, estou explorando os fundamentos da computação, compreendendo o funcionamento de interpretadores e a lógica de linguagens de baixo nível. Sou um desenvolvedor motivado por desafios e em constante aprendizado, buscando minha primeira oportunidade de estágio para aplicar essa visão analítica e técnica na criação de produtos de alta performance.
        </p>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center">
        {renderTechCategory("Frontend & UI", stacks.frontend)}
        {renderTechCategory("Core & Backend", stacks.core)}
        {renderTechCategory("Ferramentas & QA", stacks.tools)}
      </div>
    </section>
  );
}

export default AboutMe;
