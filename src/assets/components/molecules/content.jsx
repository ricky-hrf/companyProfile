const Content = ({isiContent}) => {
  return (
    <div className="md:w-1/2 min-h-screen flex items-center p-6 font-serif">
      <div className="flex flex-col gap-4">
        <div className="text-orange-50 font-semibold text-sm md:text-md">{isiContent.judulKecil}</div>
          <div className="text-orange-50 font-bold text-2xl md:text-3xl">{isiContent.judul}</div>
            <div className="text-orange-50 mb-8 text-justify">{isiContent.teks}</div>
              <div className="relative">
                  <div className="absolute">
                    <div className="flex flex-col lg:flex-row gap-4 text-left">
                    {isiContent["tombol-pertama"]}
                    {isiContent["tombol-kedua"]}
                    </div>
                  </div>
              </div>
      </div>
    </div>
  )
}
export default Content;