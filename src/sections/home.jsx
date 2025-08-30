import {
  BiLogoWhatsapp,
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";
import heroImage from "../assets/imgs/hero.jpg";
import GlitchButton from "../components/glitchButton";

const iconsList = [
  {
    icon: <BiLogoWhatsapp size={25} aria-label="true" />,
    link: "https://wa.me/5592985896942",
    ariaLabel: "Enviar uma mensagem no WhatsApp de Victor Francelino.",
  },
  {
    icon: <BiLogoGmail size={25} aria-label="true" />,
    link: "mailto:victor.francelino10@gmail.com",
    ariaLabel: "Enviar um email para Victor Francelino.",
  },
  {
    icon: <BiLogoLinkedin size={25} aria-label="true" />,
    link: "https://www.linkedin.com/in/victorfrancelino",
    ariaLabel: "LinkedIn de Victor Francelino",
  },
  {
    icon: <BiLogoGithub size={25} aria-label="true" />,
    link: "https://github.com/VictorFrancelino",
    ariaLabel: "GitHub de Victor Francelino",
  },
];

function Hero() {
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
        width={450}
        height={450}
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
        {iconsList.map((item, index) => (
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
