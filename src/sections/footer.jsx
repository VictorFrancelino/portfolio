function Footer() {
  return (
    <footer
      className="
        w-full h-[100px] 
        flex
        justify-center items-center 
        mt-15
        border-t-[2px] border-transparent
        p-5
      "
      style={{
        borderImage: "linear-gradient(to right, #F20574, #07B0F2, #FCEE0A) 1",
      }}
    >
      <p className="text-center">
        © Desenvolvido por <span>Victor Francelino</span>. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
