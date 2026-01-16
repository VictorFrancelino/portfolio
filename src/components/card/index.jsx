import Title from "./title";
import Techs from "./techs";
import Links from "./links";

const Card = ({
  title,
  showDate,
  date,
  completed,
  description,
  showTechs,
  techsList,
  showLinks,
  repoLink,
  projectLink,
}) => {
  return (
    <article
      className="
        max-w-[450px]
        min-h-fit
        bg-black
        border-2 border-white
        rounded-xl
        space-y-3 p-5
        hover:border-pink transition duration-700 ease-in-out
      "
    >
      <Title title={title} showDate={showDate} date={date} completed={completed} />
      <p className="text-justify text-lg indent-4">{description}</p>
      {showTechs && techsList && <Techs techsList={techsList} />}
      {showLinks && <Links repoLink={repoLink} projectLink={projectLink} />}
    </article>
  );
};

export default Card;
