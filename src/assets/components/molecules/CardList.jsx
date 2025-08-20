const Card = ({ lists, judul, posisi}) => {
  return (
    <div className="relative group">
        <div className="py-4 px-2">
          <span className="text-amber-950 font-semibold cursor-pointer p-2 rounded-md">{ judul }</span>
        </div>
        <div className={`absolute z-10 transform origin-top transition-all duration-300 scale-y-0 h-0 group-hover:scale-y-100 group-hover:h-auto bg-orange-50 shadow-lg rounded-md mt-0 ${posisi} w-75`}>
          {lists.map((item, index) => (
            <div key={index}>{ item }</div>
          ))}
        </div>
      </div>
  );
}
export default Card;