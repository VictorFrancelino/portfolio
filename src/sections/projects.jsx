import Card from "../components/card/index";
import { SiAstro, SiShadcnui, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill, RiGeminiFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

function Projects() {
  const projectsList = [
    {
      title: "Duardo Editor",
      description:
        "Portfólio de editor de vídeo profissional, com opção de troca de tema entre claro e escuro, bitrine de habilidades com ícones dos softwares dominados, galeria profissional exibindo vídeos em grid responsivo e área de contatos direta com links prioritários. Design minimalista que destaca o trabalho do editor sem distrações.",
      repoLink: null,
      projectLink: "https://www.duardo-editor.com.br",
      alt: "Imagem mostrando o site https://www.duardo-editor.com.br",
      techs: [
        { icon: <SiAstro aria-label="true" />, text: "Astro" },
        { icon: <FaReact aria-label="true" />, text: "React" },
        {
          icon: <SiTypescript aria-label="true" />,
          text: "TypeScript",
        },
        { icon: <SiShadcnui aria-label="true" />, text: "Shadcn" },
        {
          icon: <RiTailwindCssFill aria-label="true" />,
          text: "Tailwind",
        },
      ],
    },
    {
      title: "RotaFront",
      description:
        "Esta aplicação interativa permite que você selecione as tecnologias que já domina, as que está estudando e as que deseja aprender. Com base nessas informações, a IA, integrada com o Google Gemini, gera um roadmap de estudos personalizado e lógico para acelerar sua carreira na área do desenvolvimento Front-End.",
      repoLink: "https://github.com/VictorFrancelino/rotafront",
      projectLink: "https://rotafront.netlify.app",
      alt: "Imagem mostrando o site https://www.duardo-editor.com.br",
      techs: [
        { icon: <SiAstro aria-label="true" />, text: "Astro" },
        { icon: <FaReact aria-label="true" />, text: "React" },
        {
          icon: <SiTypescript aria-label="true" />,
          text: "TypeScript",
        },
        {
          icon: <RiTailwindCssFill aria-label="true" />,
          text: "Tailwind",
        },
        { icon: <RiGeminiFill aria-label="true" />, text: "Gemini" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="
        w-full
        flex flex-col 
        justify-center items-center 
        p-5
        py-5 md:pb-10 xl:py-10
        space-y-5
      "
    >
      <h2 className="text-2xl">Projetos</h2>
      <div className="w-full flex flex-wrap justify-center gap-10 items-start">
        {projectsList.map((project, index) => (
          <Card
            key={`project-card-${index}`}
            title={project.title}
            description={project.description}
            showTechs={true}
            techsList={project.techs}
            showLinks={true}
            repoLink={project.repoLink}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
