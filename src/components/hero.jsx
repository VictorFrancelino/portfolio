import React from "react"
import heroImage from "../assets/imgs/hero.jpg"
import CustomButton from "./customButton"
import { BiLogoGmail, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

function Hero() {
  const icons = [
    { 
      icon: <BiLogoGmail size={25} aria-hidden="true" />,
      link : "mailto:victor.francelino10@gmail.com",
      ariaLabel: "Enviar um email para Victor Francelino."
    },
    { 
      icon: <BiLogoLinkedin size={25} aria-hidden="true" />,
      link : "https://www.linkedin.com/in/victorfrancelino",
      ariaLabel: "LinkedIn de Victor Francelino"
    },
    { 
      icon: <BiLogoGithub size={25} aria-hidden="true" />,
      link : "https://github.com/VictorFrancelino",
      ariaLabel: "GitHub de Victor Francelino"
    },
  ]

  return(
    <section
      id="hero" 
      className="
        w-full 
        min-h-screen
        flex 
        flex-col
        justify-center 
        items-center 
        p-5
        gap-5
      "
    >
      <img
        src={heroImage}
        alt="Foto de Victor Francelino"
        className="
          w-full 
          max-w-[350px]
          h-[450px]
          rounded-xl 
          object-cover 
          object-center
          
          sm:max-w-[400px]
          sm:h-[500px]
        "
      />
      <div 
        className="
          flex 
          flex-col 
          justify-center 
          items-center 
          gap-y-5 
        "
      >
        <div>
          <h1 className="font-audiowide text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-pink">
            Victor Francelino
          </h1>
          <h2 className="font-sharetech text-center text-2xl text-white" role="heading">
            Desenvolvedor Front-End
          </h2>
        </div>
        <div id="links" className="flex gap-10">
          {
            icons.map((item, index) => (
              <CustomButton
                key={index} 
                icon={item.icon} 
                href={item.link}
                ariaLabel={item.ariaLabel}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Hero