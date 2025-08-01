import Chip from "../chip";

const Techs = ({ techsList }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techsList.map((tech) => (
        <Chip key={tech.text} icon={tech.icon} text={tech.text} />
      ))}
    </div>
  );
};

export default Techs;
