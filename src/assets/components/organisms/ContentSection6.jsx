import Paragraf from "../molecules/Paragraf";
import Tombol from '../atoms/button'
import { HiArrowRight, HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import iconStyle from "../atoms/icon";
import { useState } from "react";

const ContentSection6 = () => {
  const isiParagraf =
      {
        'judul': 'INVESTOR',
        'subJudul': 'Hubungan Investor',
      'isi': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, maiores eveniet reiciendis quam magni sed cupiditate unde maxime possimus nesciunt. Lorem ipsum dolor, sit amet consectetur',
      'tombol' : <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya"></Tombol>
    }

  const cards = [
    { 'id': 1, 'background':"bg-[url(../public/background.jpg)] bg-cover bg-center", 'title': "Annual Reports", 'text': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum unde ut neque voluptatem cupiditate" },
    { 'id': 2, 'background':"bg-[url(../public/background2.jpg)] bg-cover bg-center", 'title': "Shareholders", 'text': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet ut neque earum, quibusdam praesentium " },
    { 'id': 3, 'background':"bg-[url(../public/background3.jpg)] bg-cover bg-center", 'title': "Financial Reports", 'text': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet ut neque earum, quibusdam praesentium" },
    { 'id': 4, 'background':"bg-[url(../public/background4.jpg)] bg-cover bg-center", 'title': "Presentations", 'text': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet ut neque earum, quibusdam praesentium" },
    { 'id': 5, 'background':"bg-[url(../public/background5.jpg)] bg-cover bg-center", 'title': "Corporate Newsletters", 'text': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet ut neque earum, quibusdam praesentium" },
    { 'id': 5, 'background':"bg-[url(../public/background6.jpg)] bg-cover bg-center", 'title': "Bonds", 'text': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet ut neque earum, quibusdam praesentium" }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col mt-4 mb-4 md:mb-0 md:mt-0">
      <Paragraf data={isiParagraf} display="flex-2" padding="px-6" />
      <div className="flex-8 relative flex flex-row">
        <div className={`flex-1 relative ${cards[current].background}`}>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative flex-1 flex justify-center items-center flex-col bg-slate-400">
        <div className="absolute z-[998] top-2 md:top-0 lg:top-1/2 md:left-1/2 -translate-x-1/2 lg:-translate-y-1/2">
          <div className="h-70 w-60 text-sm md:text-sm md:h-80 md:w-70 bg-orange-400 rounded-lg shadow-2xl ">
            <div className="relative h-full p-8">
              <h1 className="text-orange-50 font-serif font-bold text-lg md:text-2xl mb-4">{cards[current].title}</h1>
              <p className="text-orange-50 font-serif py-4">{cards[current].text}</p>
              <div className="absolute right-5 bottom-10">
                {iconStyle(FiArrowUpRight,"","","border-2 border-orange-300")}
              </div>
            </div>
          </div>
        </div>
          <div className="absolute flex gap-8 mx-4 bottom-2">
            <div className="" onClick={prevSlide}>
              {iconStyle(HiArrowNarrowLeft, "","","border-2 border-orange-400 hover:bg-orange-400")}
            </div>
            <div className="" onClick={nextSlide}>
              {iconStyle(HiArrowNarrowRight,"","","border-2 border-orange-400 hover:bg-orange-400")}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContentSection6;