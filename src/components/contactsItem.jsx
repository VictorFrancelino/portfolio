import CustomButton from "./customButton"

function ContactsItem({ icon, link, ariaLabel, contactName, contactUser }) {
  return(
    <>
      <CustomButton 
        icon={icon} 
        href={link} 
        ariaLabel={ariaLabel}
      />
      <div className="text-center">
        <p className="text-lg text-yellow">{contactName}</p>
        <span className="text-md text-white">{contactUser}</span>
      </div>
    </>
  )
}

export default ContactsItem