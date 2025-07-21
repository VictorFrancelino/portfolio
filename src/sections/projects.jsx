import ProjectsItem from "../components/projectsItem";
import duardoEditorPreview from "../assets/imgs/duardo-editor-preview.png";

function Projects() {
  const projectsList = [
    {
      name: "Duardo Editor",
      description:
        "Portfólio de editor de vídeo profissional. Projeto feito utilizando <span>Astro</span>, <span>React</span>, <span>Shadcn UI</span>/<span>Magic UI</span>, <span>TailwindCSS</span> e <span>TypeScript</span>.",
      url: "https://www.duardo-editor.com.br",
      alt: "Imagem mostrando o site https://www.duardo-editor.com.br",
      preview: duardoEditorPreview,
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
      "
    >
      <h2 className="text-2xl">Projetos</h2>
      <div className="w-full flex flex-wrap justify-center gap-10">
        {projectsList.map((project) => (
          <ProjectsItem
            key={project.name}
            name={project.name}
            description={project.description}
            url={project.url}
            alt={project.alt}
            preview={project.preview}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
