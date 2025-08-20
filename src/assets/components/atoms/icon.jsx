const iconStyle = ( Icon, className = "", onClick, display="" ) => {
  return (
    <div className={`${display} flex justify-center items-center w-10 h-10 rounded-full hover:bg-orange-50 cursor-pointer`}>
      <Icon className={`text-orange-900 hover:text-orange-950 text-2xl transition duration-300 ease-in-out ${className}`}
        onClick={onClick} />
    </div>
  )
}
export default iconStyle;