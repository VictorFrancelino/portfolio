import { 
  BiLogoHtml5, 
  BiLogoCss3, 
  BiLogoBootstrap, 
  BiLogoTailwindCss,
  BiLogoJavascript, 
  BiLogoReact, 
  BiLogoGit, 
  BiLogoGithub
} from "react-icons/bi";
import Tech from "./tech"

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

  ]

  return(
    <section className="
      w-full
      flex 
      flex-col 
      justify-between 
      items-center 
      py-10
      px-5
      gap-y-5
  
      md:px-15

      lg:flex-row
      lg:gap-y-0
    ">
      <div className="
        w-full
        gap-5
        order-2

        grid
        grid-cols-3
        
        sm:grid-cols-4

        lg:grid-cols-2
        lg:order-1
      ">
        {techsList.map((item, index) => (
          <Tech 
            key={index}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </div>
      <div 
        className="
          w-full 
          flex 
          flex-col 
          justify-center 
          gap-y-5 
          order-1

          lg:order-2
        "
      >
        <h2 className="text-center text-light-blue text-2xl font-audiowide">Sobre mim</h2>
        <p 
          className="text-justify text-white text-lg font-sharetech" 
          style={{ textIndent: '2rem' }}
        >
          Sou um estudante apaixonado por aprender sobre Tecnologia, especialmente no campo da programação. Iniciei minha jornada em 2020 e, desde então, adquiri bastante conhecimento em diversas tecnologias de front-end, como <span className="text-yellow">HTML5</span>, <span className="text-yellow">CSS3</span>, <span className="text-yellow">Bootstrap</span>, <span className="text-yellow">JavaScript</span> e <span className="text-yellow">React</span>, além de habilidades com as ferramentas <span className="text-yellow">Git</span> e <span className="text-yellow">GitHub</span>. Atualmente, estou me aprofundando ainda mais em <span className="text-yellow">React</span> e <span className="text-yellow">Tailwind</span>, criando interfaces modernas e responsivas, e também focado no estudo da criação de APIs usando <span className="text-yellow">NodeJS</span>. Meu objetivo é me tornar um desenvolvedor diferenciado, aplicando minha criatividade e competências técnicas para solucionar problemas complexos com eficiência.
        </p>
      </div>
    </section>
  )
}

export default AboutMe