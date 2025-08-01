import Card from "../components/card/index";
import { educationsList } from "../data/educationsList";

function Education() {
  return (
    <section
      id="education"
      className="
        w-full 
        flex flex-col 
        justify-center items-center
        p-5
        py-5 md:pb-10 xl:py-10
        space-y-5
      "
    >
      <h2 className="text-2xl">Formação</h2>
      <div className="flex flex-wrap justify-center items-start gap-5">
        {educationsList.map((item, index) => (
          <Card
            key={`education-card-${index}`}
            title={item.title}
            showDate={true}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;
