function EducationCard({ title, date, description }) {
  return(
    <article className="max-w-[450px] bg-[#111111] border-2 border-white rounded-xl p-5 hover:border-pink transition duration-700 ease-in-out">
      <h3 className="text-yellow font-sharetech text-xl">{title}</h3>
      <p className="text-yellow font-sharetech text-base">
        <time datetime={date}>{date}</time> - Cursando
      </p>
      <p className="text-white font-sharetech text-justify text-lg">{description}</p>
    </article>
  )
}

export default EducationCard