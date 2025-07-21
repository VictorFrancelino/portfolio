import heroImage from "../assets/imgs/hero.jpg";
import GlitchButton from "../components/glitchButton";
import { BiLogoGmail, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

function Hero() {
  const icons = [
    {
      icon: <BiLogoGmail size={25} aria-hidden="true" />,
      link: "mailto:victor.francelino10@gmail.com",
      ariaLabel: "Enviar um email para Victor Francelino.",
    },
    {
      icon: <BiLogoLinkedin size={25} aria-hidden="true" />,
      link: "https://www.linkedin.com/in/victorfrancelino",
      ariaLabel: "LinkedIn de Victor Francelino",
    },
    {
      icon: <BiLogoGithub size={25} aria-hidden="true" />,
      link: "https://github.com/VictorFrancelino",
      ariaLabel: "GitHub de Victor Francelino",
    },
  ];

  return (
    <section
      id="hero"
      className="
        w-full 
        min-h-screen
        flex flex-col
        justify-center items-center 
        p-5
        space-y-5
      "
    >
      <img
        src={heroImage}
        alt="Foto de Victor Francelino"
        loading="eager"
        fetchPriority="high"
        className="
          rounded-full 
          object-cover object-center
          w-full
          max-w-[400px] xl:max-w-[450px]
          aspect-square
        "
      />

      <div id="title">
        <h1 className="text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl">
          Victor Francelino
        </h1>
        <h2 className="text-lg md:text-2xl text-center" role="heading">
          Desenvolvedor Front-End
        </h2>
      </div>

      <div id="links" className="flex space-x-10">
        {icons.map((item, index) => (
          <GlitchButton
            key={index}
            icon={item.icon}
            href={item.link}
            ariaLabel={item.ariaLabel}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
