const iconStyle = ( Icon, className = "text-orange-900", onClick, display="" ) => {
  return (
    <div className={`${display} flex justify-center items-center w-10 h-10 rounded-full hover:bg-orange-100 cursor-pointer`}>
      <Icon className={`${className} hover:text-orange-950 text-2xl transition duration-300 ease-in-out `}
        onClick={onClick} />
    </div>
  )
}
export default iconStyle;