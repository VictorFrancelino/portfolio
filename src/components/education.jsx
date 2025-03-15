import EducationCard from "./educationCard"

function Education() {
  const educationCardList = [
    {
      title: "FUCAPI",
      date: 2022,
      description: "Atualmente, estou cursando Informática com Ênfase em Programação na FUCAPI, onde adquiri uma base sólida em lógica de programação, estruturas de dados e conceitos de redes. Durante o curso, aprofundei meus conhecimentos em desenvolvimento web e mobile, além de estudar os fundamentos de hardware. Essa formação tem me dado uma visão abrangente do universo de TI.",
    },
    {
      title: "DESCOMPLICA",
      date: 2024,
      description: "Atualmente, estou matriculado no curso de Análise e Desenvolvimento de Sistemas na Descomplica, onde também estou estudando UI/UX Design para criar interfaces centradas no usuário. Ao longo dessa formação, amplio meus conhecimentos em desenvolvimento web, explorando frameworks modernos. Tenho aprimorado minhas habilidades em front-end (HTML, CSS, JavaScript, React), além de assimilar boas práticas de programação. Essa experiência me capacita a desenvolver soluções funcionais, escaláveis e focadas na melhor experiência para o usuário.",
    },
  ]

  return(
    <section
      id="education"
      className="
        w-full 
        flex 
        flex-col 
        justify-center 
        items-center 
        gap-y-5
        py-10
        px-5
      "
    >
      <h2 className="text-light-blue text-2xl font-audiowide">
        Formação
      </h2>
      <div className="flex flex-wrap justify-center items-start gap-5">
        {educationCardList.map((item, index) => (
          <EducationCard 
            key={index}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Education