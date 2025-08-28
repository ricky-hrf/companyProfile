const CardArtikel = ({ background = "bg-purple-600", judulArtikel, paragraf, Tombol }) => {
  return (
    <div className="relative py-5 px-10 h-120 bg-white shadow-xl rounded-xl">
      <div className={`${background} w-full h-50 rounded-xl`}></div>
        <div className="mt-4 px-4 text-orange-950 font-serif pb-3">
          <h1 className="font-bold text-2xl mb-4">{judulArtikel}</h1>
        <span className="text-justify text-orange-800">{paragraf}</span>
      </div>
      <div className="absolute bottom-5">
        <div className="flex justify-start mt-auto px-4">
          {Tombol}
        </div>
      </div>
    </div>
  );
}
export default CardArtikel;