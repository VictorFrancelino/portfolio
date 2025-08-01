const Title = ({ title, showDate, date }) => {
  return (
    <div className="flex space-x-2">
      <h3
        className={`text-xl ${showDate ? "pr-2 border-r-2 border-white" : ""} `}
      >
        {title}
      </h3>
      {showDate ? (
        <p className="text-lg">
          <time dateTime={date}>{date}</time> - Cursando
        </p>
      ) : null}
    </div>
  );
};

export default Title;
