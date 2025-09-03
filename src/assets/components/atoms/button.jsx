const button = ({ icon, color ="text-amber-950", text="" }) => {
  return (
    <>
      <button className={`flex items-center gap-4 justify-baseline border border-amber-400 hover:bg-orange-400 px-4 py-2 md:px-8 md:py-4 rounded-full transition duration-300 cursor-pointer ease-in-out ${color} font-semibold hover:text-white`}>
        {text}
        { icon }
      </button>
    </>
  );
}

export default button;