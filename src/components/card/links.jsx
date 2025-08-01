import GlitchButton from "../glitchButton";
import { LuCodeXml, LuSquareArrowOutUpRight } from "react-icons/lu";

const Links = ({ repoLink, projectLink }) => {
  return (
    <div className="flex space-x-5">
      {repoLink ? (
        <GlitchButton
          icon={<LuCodeXml />}
          href={repoLink}
          ariaLabel={"Visitar repositório desse projeto no GitHub."}
        />
      ) : null}
      <GlitchButton
        icon={<LuSquareArrowOutUpRight />}
        href={projectLink}
        ariaLabel={"Visitar o site desse projeto."}
      />
    </div>
  );
};

export default Links;
