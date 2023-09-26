const BookButton = ({ text, onClick }) => {
  return (
    <button
      className="relative sm:absolute sm:top-[37px] top-[16px] container mx-auto sm:right-[38px] w-fit px-10 py-4 z-10 bg-[#CA6D3C] text-white border-[1px] border-[#CA6D3C] inline-flex justify-center text-[12px] leading-[16px] uppercase "
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BookButton;
