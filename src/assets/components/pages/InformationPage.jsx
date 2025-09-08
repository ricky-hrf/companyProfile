import { useState } from "react";
import Navbar from "../organisms/Navbar/main";
import Footer from "../organisms/footer";
import { HiOutlineCalendar, HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { dataBerita } from "../../data/dataInformasi";
import Tombol from "../atoms/button";

const InformationPage = () => {
  const badge = dataBerita[0].category;
  const [newsCurrent, setNewsCurrent] = useState(0);

  const nextSlide = () => {
    setNewsCurrent((prev) => (prev + 1) % badge.length);
  };

  const prevSlide = () => {
    setNewsCurrent((prev) => (prev - 1 + badge.length) % badge.length);
  };

  return (
    <div className="bg-orange-50 text-orange-950 font-serif">
      <Navbar />
      <div className={`relative h-screen ${badge[newsCurrent].badge} bg-cover bg-center`}>
        <div className="absolute inset-0 bg-black/50">
          <div className="relative flex flex-col justify-center text-white h-full px-10 transform transition-all duration-700 ease-in-out">
            <div className="flex flex-col gap-5">
              <span>{badge[newsCurrent].kategori}</span>
              <h1 className="w-[75%] md:text-4xl font-semibold">{badge[newsCurrent].judul}</h1>
              <div className="flex gap-3">
                <HiOutlineCalendar />
                <span>{badge[newsCurrent].terbit}</span>
              </div>
            </div>
            <div className="absolute bottom-10 md:right-10 flex gap-2">
              <div onClick={prevSlide} className="w-15 h-10 rounded flex justify-center items-center border border-orange-400 hover:bg-orange-400 cursor-pointer">
                <HiArrowNarrowLeft className="text-2xl" />
              </div>
              <div onClick={nextSlide} className="w-15 h-10 rounded flex justify-center items-center border border-orange-400 hover:bg-orange-400 cursor-pointer ">
                <HiArrowNarrowRight className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="border-l-2 border-orange-400 px-3">
            <h2 className="text-xl font-bold">Siaran Pers</h2>
            <p className="text-sm">Berita Resmi mengenai kebijakan, inisiatif dan pencapaian perusahaan</p>
          </div>
          <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-2xl" />} />
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-8 flex flex-col gap-4">
          <div className={`${dataBerita[0].category[0].badge} h-100 bg-cover bg-center rounded-xl hover:scale-105 transform transition-all duration-300`}></div>
          <span className="text-xs">{dataBerita[0].category[0].kategori}</span>
          <h1 className="text-lg md:text-2xl font-semibold hover:text-orange-800 cursor-pointer">{dataBerita[0].category[0].judul}</h1>
          <div className="flex gap-3">
            <HiOutlineCalendar />
            <span className="text-orange-400">{dataBerita[0].category[0].terbit}</span>
          </div>
          <p className="text-orange-800 line-clamp-2">{dataBerita[0].category[0].artikel}</p>
        <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-2xl" />} />
        </div>
        <div className="col-span-8 md:col-span-4 gap-5 h-full">
          <div className="flex flex-col">
            {dataBerita[0].category.slice(1).map((item, i) => (
              <div key={i} className="w-full flex justify-between gap-2 border-b border-orange-400 pb-4">
                <div className="h-40 w-full shadow-xl">
                  <div className={`w-full h-full ${item.badge} bg-cover bg-center rounded-lg hover:scale-105 transform transition-all duration-300`}></div>
                </div>
                <div className="w-full flex flex-col justify-center gap-2">
                  <span className="text-xs">{item.kategori}</span>
                  <h2 className="font-semibold line-clamp-2 cursor-pointer hover:underline">{item.judul}</h2>
                  <div className="flex gap-2 text-xs">
                    <HiOutlineCalendar className="text-xs" />
                    <span className="text-orange-400">{item.terbit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default InformationPage;