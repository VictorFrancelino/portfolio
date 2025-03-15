import ProjectsItem from "./projectsItem";

function Projects() {
  return(
    <section
      id="projects"
      className="
        w-full
        flex
        flex-col 
        justify-center 
        items-center 
        py-10
        px-5
        gap-y-5 
      "
    >
      <h2 className="text-light-blue text-2xl font-audiowide">Projetos</h2>
      <div className="w-full flex flex-wrap justify-center gap-5">
        <ProjectsItem />
        <ProjectsItem />
        <ProjectsItem />
      </div>
    </section>
  )
}

export default Projects