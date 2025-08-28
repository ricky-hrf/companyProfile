import Navbar from "../organisms/Navbar/main";
import Tombol from '../atoms/button';
import { HiArrowRight, HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Footer from '../organisms/footer';
import ContentSection3 from "../organisms/ContentSection3";
import ContentSection5 from "../organisms/ContentSection5";
import ContentSection6 from "../organisms/ContentSection6";
import ContentSection7 from "../organisms/ContentSection7";
import Paragraf from "../molecules/Paragraf";
import Content from "../molecules/content";
import iconStyle from "../atoms/icon";
import { useState } from "react";

const HomePage = () => {
  const isiParagraf =
    {
      'judul': 'LOREM IPSUM 500',
      'subJudul': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vel.',
    'isi': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, maiores eveniet reiciendis quam magni sed cupiditate unde maxime possimus nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, inventore cumque nulla repellendus nostrum nobis, ex, laboriosam voluptates quae nam laborum consequatur expedita beatae ullam dolor tenetur optio aliquam dignissimos.',
      'tombol' : <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya"></Tombol>
  }
  const isiConten = {
    'judulKecil': "SEKILAS LOREM IPSUM",
    'judul': "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one."
  }

  const bg = [
    {'id':1, 'background':'bg-[url(../public/background.jpg)] bg-cover bg-center'},
    {'id':2, 'background':'bg-[url(../public/background2.jpg)] bg-cover bg-center'},
    {'id':3, 'background':'bg-[url(../public/background3.jpg)] bg-cover bg-center'},
    {'id':4, 'background':'bg-[url(../public/background4.jpg)] bg-cover bg-center'}
  ]

  const [bgCurrent, setBgCurrent] = useState(0);

  const nextSlide = () => {
    setBgCurrent((prev) => (prev + 1) % bg.length);
  };

  const prevSlide = () => {
    setBgCurrent((prev) => (prev - 1 + bg.length) % bg.length);
  };
  
  return (
    // bg-[url(../public/background.jpg)]
    <div className="bg-orange-50">
      <div className={`relative h-screen ${bg[bgCurrent].background} bg-cover bg-center w-full`}>
        <div className="absolute inset-0 bg-black/50 px-8">
          <Navbar />
          <div className="flex">
            <Content isiContent={isiConten} />
            <div className="relative flex-1">
              <div className="absolute bottom-5 right-30 md:bottom-10 md:right-10 flex gap-10">
                <div onClick={prevSlide} className="">
                  {iconStyle(HiArrowNarrowLeft, "text-orange-50","","border-2 border-orange-50 hover:bg-orange-400")}
                </div>
                <div onClick={nextSlide} className="">
                  {iconStyle(HiArrowNarrowRight, "text-orange-50","","border-2 border-orange-50 hover:bg-orange-400")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-orange-50 md:grid grid-cols-2">
        <div className="h-full">
        </div>
        <div className="min-h-screen p-6 flex flex-col gap-4 justify-center items-center ">
          <div className="p-6">
            <span className="text-md text-orange-400 md:text-lg font-semibold mb-2">LOREM IPSUM</span>
            <h1 className="text-2xl md:text-4xl text-orange-950 font-semibold mb-4">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="text-md md:text-lg text-justify mt-4 text-orange-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia culpa exercitationem assumenda hic consectetur sunt labore sequi doloremque esse. Similique quia doloribus magni quasi voluptates possimus et reprehenderit, officiis veniam, ipsum est fugit facilis delectus dolore vitae, optio molestias consectetur. Dignissimos voluptatibus nobis perspiciatis maxime tempora dolor, iste quasi!</p>
          </div>
          <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya"></Tombol>
        </div>
      </div>
      <ContentSection3 />
      <div className="min-h-screen md:h-screen bg-orange-50 flex flex-col">
        <Paragraf data={isiParagraf} />
        <div className="flex-1 md:border-t-2 border-orange-100 md:flex flex-row gap-4 pt-8 px-4">
          <div className="flex-1 p-4">
            <div className="text-sm md:text-md font-semibold text-amber-950 mb-4">PENDAPATAN</div>
            <div className="text-5xl font-semibold text-amber-950">USD 10,45 Juta</div>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, ratione.</p>
          </div>
          <div className="flex-1 p-4">
            <div className="text-sm md:text-md font-semibold text-amber-950 mb-4">TOTAL LABA</div>
            <div className="text-5xl font-semibold text-amber-950">USD 50 Ribu</div>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, ratione.</p>
          </div>
          <div className="flex-1 p-4">
            <div className="text-sm md:text-md font-semibold text-amber-950 mb-4">RISK RATING</div>
            <div className="text-5xl font-semibold text-amber-950 mb-2">8,93</div>
            <span className="text-2xl font-semibold text-amber-950">(Low Risk)</span>
          </div>
        </div>
      </div>
      <ContentSection5 />
      <ContentSection6 />
      <ContentSection7 />
      <Footer />
    </div>
  )
}
export default HomePage;