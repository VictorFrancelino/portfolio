function EducationCard({ title, date, description }) {
  return (
    <article className="max-w-[450px] bg-[#111111] border-2 border-white rounded-xl p-5 hover:border-pink transition duration-700 ease-in-out space-y-3">
      <div id="card-title" className="flex space-x-2">
        <h3 className="text-xl pr-2 border-r-2 border-white">{title}</h3>
        <p className="text-lg">
          <time dateTime={date}>{date}</time> - Cursando
        </p>
      </div>
      <p className="text-justify text-lg indent-4">{description}</p>
    </article>
  );
}

export default EducationCard;
