import GlitchButton from "./glitchButton";
import { LuCodeXml, LuSquareArrowOutUpRight } from "react-icons/lu";

function ProjectsItem({ name, description, url, alt, preview, repoLink }) {
  return (
    <div className="w-[500px]">
      <h3 className="text-xl mb-2">{name}</h3>
      <img
        className="
          aspect-video
          rounded-xl
        "
        src={preview}
        alt={alt}
      />
      <p
        className="mt-2 text-lg indent-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="flex space-x-5 mt-5">
        {repoLink ? (
          <GlitchButton
            icon={<LuCodeXml />}
            href={repoLink}
            ariaLabel={"Visitar repositório desse projeto no GitHub."}
          />
        ) : null}
        <GlitchButton
          icon={<LuSquareArrowOutUpRight />}
          href={url}
          ariaLabel={"Visitar o site desse projeto."}
        />
      </div>
    </div>
  );
}

export default ProjectsItem;
