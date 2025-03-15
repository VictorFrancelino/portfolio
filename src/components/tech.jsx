import React from "react"

function Tech({ icon, text }) {
  const defaultIconClasses = `
    text-[#F8F9FA] 
    group-hover:text-pink 
    group-hover:-translate-y-5 
    transition 
    duration-700 
    ease-in-out 
    text-8xl
    
    sm:text-9xl
    lg:text-[150px]
  `

  const clonedIcon = React.cloneElement(icon, {
    className: icon.props.className ? 
      icon.props.className + " " + defaultIconClasses 
      : defaultIconClasses,
    "aria-label": text,
  })

  return(
    <div className="flex flex-col items-center">
      <div className="group relative inline-flex">
        {clonedIcon}
        <span className="
            w-full
            text-center
          text-pink 
            font-sharetech 
            absolute 
            -z-10 
            bottom-0
            opacity-0 
            group-hover:opacity-100 
            transition 
            duration-700 
            ease-in-out
        ">
          {text}
        </span>
      </div>
    </div>
  )
}

export default Tech