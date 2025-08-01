const Chip = ({ icon, text }) => {
  return (
    <div
      className="
        bg-yellow/10
        text-yellow
        border border-yellow
        font-sharetech 
        px-4 py-1 
        flex justify-center items-center gap-x-2 
        rounded-full
        hover:bg-yellow/20
        transition-colors
      "
    >
      {icon}
      {text}
    </div>
  );
};

export default Chip;
