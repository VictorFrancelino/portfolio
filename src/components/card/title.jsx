const Title = ({ title, showDate, date, completed }) => {
  return (
    <div className="flex space-x-2">
      <h3 className={`text-xl ${showDate ? "pr-2 border-r-2 border-white" : ""} `}>
        {title}
      </h3>
      {showDate ? (
        <p className="text-lg">
          {date && <><time dateTime={date}>{date}</time>{" - "}</>}
          {completed ? "Concluído" : "Cursando"}
        </p>
      ) : null}
    </div>
  );
};

export default Title;
