const list = ({ isi, lengkungan, icon }) => {
  return (
    <div className={`flex justify-between items-center px-4 py-2 text-md text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 ${lengkungan} transition-all duration-200 ease-in-out cursor-pointer`}>
      <span className="font-semibold">{ isi}</span>
      <span className="font-semibold">{ icon }</span>
    </div>
  );
}
export default list;