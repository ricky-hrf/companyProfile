import { HiArrowRight } from 'react-icons/hi';
import Tombol from '../atoms/button';
import Paragraf from '../molecules/Paragraf';
import { useState } from 'react';

const ContentSection8 = () => {
  const isiContent = {
    'judul': 'LOREM IPSUM DOLOR SIT',
    'subJudul': 'Lorem Ipsum Dolor',
    'isi': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores porro voluptates quod ex totam! Suscipit, commodi nam',
    'tombol' : <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya" color="text-orange-950"></Tombol>
  }
  const dataSubholding = [
    {
    "background": "bg-amber-500",
    "teks" : "Kursus Pemrograman"
    },
    {
    "background": "bg-amber-700",
    "teks" : "Kursus Desain & Multimedia"
    },
    {
    "background": "bg-amber-400",
    "teks" : "Kursus Jaringan & Keamanan"
    },
    {
    "background": "bg-amber-600",
    "teks" : "Hardware & Perakitan"
    },
    {
    "background": "bg-amber-300",
    "teks" : "Sertifikasi & Ujian Kompetensi"
    },
    {
    "background": "bg-amber-800",
    "teks" : "Edutech & Produk Digital"
    }
  ]
  const dataServices = [
    {
      "background": "bg-orange-600",
      "teks": "Software Development Training"
    },
    {
      "background": "bg-orange-400",
      "teks": "Network & Cybersecurity Training"
    },
    {
      "background": "bg-orange-700",
      "teks": "Data Science & AI Training"
    },
    {
      "background": "bg-orange-400",
      "teks": "Multimedia & Design Training"
    },
    {
      "background": "bg-orange-600",
      "teks": "Office Productivity Training"
    },
    {
      "background": "bg-orange-800",
      "teks": "Computer Hardware & IoT Training"
    }
  ];

  const [activeCategory, setActiveCategory] = useState("subholding");

  const cartContent = activeCategory === "subholding" ? dataSubholding : dataServices;

  return (
    <div className="mb-8">
      <Paragraf data={isiContent} display='font-serif mb-6' />
      <div className="flex flex-col gap-2 text-orange-950">
        <div className="flex py-2 px-8">
          <div className="flex gap-2 p-2 rounded-full bg-amber-100 font-semibold font-serif text-amber-50">
            <div
              onClick={() => setActiveCategory("subholding")}
              className={`border border-amber-400 px-4 py-2 rounded-full ${activeCategory === "subholding"?"bg-orange-500 text-orange-50" : "bg-orange-50 text-orange-900 "} hover:bg-orange-500 transition-all duration-300 hover:text-orange-50 cursor-pointer`}>
              Subholding
            </div>
            <div
              onClick={() => setActiveCategory("services")}
              className={`border border-amber-400 px-4 py-2 rounded-full ${activeCategory === "services"?"bg-orange-500 text-orange-50" : "bg-orange-50 text-orange-900"} hover:bg-orange-500  hover:text-orange-50 cursor-pointer`}>AP & Services</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4  px-8 py-4">
          {cartContent.map((item, index) => (
            <div key={index} className={`group relative h-70 cursor-pointer [perspective:1000px]`}>
              <div className="relative w-full h-full flex justify-center items-center rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className={`absolute inset-0 ${item.background} text-orange-50 flex px-4 rounded-xl [backface-visibility:hidden]`}>
                  <h1 className="text-xl font-bold mt-10">{item.teks}</h1>
                </div>
                <div className="text-amber-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h1 className="text-xl font-bold top-20">Belakang</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ContentSection8;