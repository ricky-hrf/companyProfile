const paragraf = ({data, display = "flex-1", padding = "p-6"}) => {
  return (
    <div className={`${display} md:flex flex-row`}>
      <div className={`flex-[4] flex flex-col justify-center ${padding}`}>
        <span className="text-sm text-orange-400 md:text-md font-semibold mb-2">{data.judul}</span>
        <div className="text-xl md:text-2xl font-semibold">{data.subJudul}</div>
      </div>
      <div className={`flex-[4] flex items-center justify-center ${padding} text-amber-950 font-semibold text-justify`}>{data.isi}</div>
      <div className="flex-[2] flex items-center justify-center">{data.tombol}</div>
    </div>
  )
}
export default paragraf;