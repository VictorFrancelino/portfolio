function Footer() {
  return(
    <footer className="
        w-full 
        h-[100px] 
        flex
        justify-center 
        items-center 
        mt-15
        border-t-[2px]
        border-transparent
        px-5
      " 
      style={{ borderImage: "linear-gradient(to right, #F20574, #07B0F2, #FCEE0A) 1" }}
    >
      <p className="text-white text-center font-sharetech">
       © Desenvolvido por <span className="text-yellow">Victor Francelino</span>. Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer