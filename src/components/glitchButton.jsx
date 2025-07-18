import { useGlitch } from "react-powerglitch";

function GlitchButton({ icon, href, ariaLabel }) {
  const glitchButton = useGlitch({
    playMode: "hover",
    timing: {
      easing: "ease-in-out",
    },
  });

  return (
    <a
      ref={glitchButton.ref}
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      className="
        w-[50px] h-[50px] 
        bg-white rounded-xl 
        flex justify-center items-center
        
        transition-all
        duration-700 ease-in-out

        hover:bg-pink
        hover:drop-shadow-(--drop-shadow-pink) 
      "
    >
      {icon}
    </a>
  );
}

export default GlitchButton;
