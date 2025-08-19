const CardListMobile = ({judul, lists, open}) => {
  return (
    <div>
      {open && (
      <div className="origin-top absolute right-0 left-0 md:hidden bg-orange-50 p-2 shadow-xl transform transition-all duration-300 ease-in-out">
        <div className="">{judul}</div>
        <div>
          {lists.map((item, index) => (
            <div className="" key={index}>{item}</div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
}
export default CardListMobile;