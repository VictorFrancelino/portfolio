import GlitchButton from "./glitchButton";

function ContactsItem({ icon, link, ariaLabel, contactName, contactUser }) {
  return (
    <>
      <GlitchButton icon={icon} href={link} ariaLabel={ariaLabel} />
      <div className="text-center">
        <p className="text-lg">{contactName}</p>
        <span>{contactUser}</span>
      </div>
    </>
  );
}

export default ContactsItem;
