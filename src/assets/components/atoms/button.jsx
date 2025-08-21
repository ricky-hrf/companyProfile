const button = ({ icon, color ="text-amber-950", text="" }) => {
  return (
    <>
      <button className={`flex items-center gap-4 justify-center border border-amber-400 hover:bg-orange-400 px-8 py-4 rounded-full transition duration-300 cursor-pointer ease-in-out ${color} font-semibold hover:text-white`}>
        {text}
        { icon }
      </button>
    </>
  );
}

export default button;