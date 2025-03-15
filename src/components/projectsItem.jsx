function ProjectsItem() {
  return(
    <article 
      className="
        group
        w-[300px]
        h-[200px]
        font-sharetech 
        flex 
        justify-center 
        items-center 
        bg-black 
        rounded-xl 
        border-2 
        border-white
        transition duration-700
        ease-in-out
        hover:border-pink
      "
    >
      <div 
        className="
          w-full 
          h-[50px] 
          bg-white 
          flex 
          justify-center 
          items-center 
          transition
          duration-700
          ease-in-out
          group-hover:bg-pink
        "
      >
        <p 
          className="
            text-black 
            text-lg 
            transition-all
            duration-700 
            ease-in-out
            group-hover:tracking-widest 
          "
        >
          Em breve
        </p>
      </div>
    </article>
  )
}

export default ProjectsItem