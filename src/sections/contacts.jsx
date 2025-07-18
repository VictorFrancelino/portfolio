import ContactsItem from "../components/contactsItem";
import { BiLogoGmail, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

function Contacts() {
  const contactsList = [
    {
      icon: <BiLogoGmail size={25} aria-hidden="true" />,
      link: "mailto:victor.francelino10@gmail.com",
      ariaLabel: "Enviar um email para Victor Francelino.",
      contactName: "E-mail",
      contactUser: "victor.francelino10@gmail.com",
    },
    {
      icon: <BiLogoLinkedin size={25} aria-hidden="true" />,
      link: "https://www.linkedin.com/in/victorfrancelino",
      ariaLabel: "LinkedIn de Victor Francelino",
      contactName: "LinkedIn",
      contactUser: "@victorfrancelino",
    },
    {
      icon: <BiLogoGithub size={25} aria-hidden="true" />,
      link: "https://github.com/VictorFrancelino",
      ariaLabel: "GitHub de Victor Francelino",
      contactName: "GitHub",
      contactUser: "@VictorFrancelino",
    },
  ];

  return (
    <section
      className="
      w-full
      flex flex-col 
      justify-center items-center 
      p-5
      py-5 md:pb-10 xl:py-10
      space-y-5
    "
    >
      <h2 className="text-2xl">Contatos</h2>
      <ul className="w-full flex flex-wrap justify-center items-center gap-10">
        {contactsList.map((item, index) => (
          <li
            key={index}
            className="w-[200px] flex flex-col justify-center items-center space-y-3"
          >
            <ContactsItem
              key={index}
              icon={item.icon}
              link={item.link}
              ariaLabel={item.ariaLabel}
              contactName={item.contactName}
              contactUser={item.contactUser}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
