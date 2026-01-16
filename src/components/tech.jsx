import React from "react";

function Tech({ icon, text }) {
  const defaultIconClasses = `
    text-white
    text-8xl sm:text-9xl lg:text-[150px]
    transition-all duration-500 ease-in-out
    group-hover:text-pink group-hover:drop-shadow-[0_0_10px_rgba(255,20,147,0.5)]
    group-hover:-translate-y-5
  `;

  const clonedIcon = React.cloneElement(icon, {
    className: icon.props.className
      ? icon.props.className + " " + defaultIconClasses
      : defaultIconClasses,
    "aria-label": text,
  });

  return (
    <div className="flex flex-col items-center">
      <div className="group relative inline-flex">
        {clonedIcon}

        <span
          className="
            w-full
            text-center
            absolute -z-10 bottom-0
            transition duration-700 ease-in-out
            opacity-0 group-hover:opacity-100
          "
        >
          {text}
        </span>
      </div>
    </div>
  );
}

export default Tech;
