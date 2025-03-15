import { useGlitch } from "react-powerglitch";

function CustomButton({ icon, href, ariaLabel }) {
  const glitchButton = useGlitch({
    playMode: "hover",
    timing: {
      easing: "ease-in-out"
    }
  })

  return(
    <a 
      ref={glitchButton.ref}
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      className="w-[50px] h-[50px] bg-white rounded-xl flex justify-center items-center hover:drop-shadow-(--drop-shadow-pink) hover:bg-pink transition duration-700 ease-in-out"
    >
      {icon}
    </a>
  )
}

export default CustomButton