import Paragraf from "../molecules/Paragraf";
import { HiArrowRight, HiOutlineCalendar } from 'react-icons/hi';
import Tombol from '../atoms/button';
import { useState } from "react";

const ContentSection9 = () => {
  const isiParagraf = {
    "judul": "MEDIA INFORMASI",
    "subJudul": "News Room",
    "isi": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quod quae. Natus voluptate ducimus magni molestias provident odio modi, eius quo, officiis dolores atque",
    'tombol': <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya" color="text-orange-950"></Tombol>
  }
  const dataSiaranPers = [
    {
      'kategori':'SIARAN PERS',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo?',
      'tanggal': '29 Agustus 2025'
    },
    {
      'kategori':'SIARAN PERS',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo?',
      'tanggal': '29 Agustus 2025'
    },
    {
      'kategori':'SIARAN PERS',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo?',
      'tanggal': '29 Agustus 2025'
    },
    {
      'kategori':'SIARAN PERS',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo?',
      'tanggal': '29 Agustus 2025'
    },
    {
      'kategori':'SIARAN PERS',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo?',
      'tanggal': '29 Agustus 2025'
    }
  ]
  const dataBerita = [
    {
      'kategori': 'BERITA',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    },
    {
      'kategori': 'BERITA',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    },
    {
      'kategori': 'BERITA',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    },
    {
      'kategori': 'BERITA',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    }
  ];

  const dataBeritaTeknologi = [
    {
      'kategori': 'BERITA TEKNOLOGI',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    },
    {
      'kategori': 'BERITA TEKNOLOGI',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    },
    {
      'kategori': 'BERITA TEKNOLOGI',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    },
    {
      'kategori': 'BERITA TEKNOLOGI',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    },
    {
      'kategori': 'BERITA TEKNOLOGI',
      'judul': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, illo',
      'tanggal': '1 September 2025'
    }
  ];

  const dataKnowledgeBulletin = [
    {
      'judul': 'Transformasi Digital dalam Dunia Kursus: Tren dan Tantangan',
      'bg':'bg-orange-400'
    },
    {
      'judul': 'Skill Masa Depan: Teknologi yang Harus Dipelajari di 2025',
      'bg':'bg-orange-600'
    },
    {
      'judul': 'Cerita Alumni: Dari Kelas Kursus ke Karier Impian',
      'bg':'bg-orange-500'
    },
    {
      'judul': 'Inovasi Pembelajaran: Bagaimana AI Mengubah Cara Kita Belajar',
      'bg':'bg-orange-700'
    }
  ];

  const dataNextSkillMagazine = [
    {
      'judul': 'Next-Gen Coding: Bahasa Pemrograman yang Wajib Dipelajari',
      'bg':'bg-yellow-400'
    },
    {
      'judul': 'Design Thinking: Kunci Kreativitas di Era Digital',
      'bg':'bg-yellow-600'
    },
    {
      'judul': 'Level Up Your Career: Skill Non-Teknis yang Membuat Perbedaan',
      'bg':'bg-yellow-500'
    },
    {
      'judul': 'Future of Work: Bagaimana Otomasi Mengubah Kebutuhan Skill',
      'bg':'bg-yellow-700'
    }
  ];

  const [activeCategory, setActiveCategory] = useState("news");
  const [newsAktif, setNewsAktif] = useState("pers");
  const [magazineAktif, setMagazineAktif] = useState("knowledge");
  const cardNews = newsAktif === "pers" ? dataSiaranPers : newsAktif === "berita" ? dataBerita : dataBeritaTeknologi;
  const cardMagazine = magazineAktif === "knowledge" ? dataKnowledgeBulletin : dataNextSkillMagazine;

  return (
    <div className="font-serif">
      <Paragraf data={isiParagraf} display="px-6" />
      <div className="flex flex-col px-6 my-8">
        <div className="py-2">
          <div className="flex flex-col gap-2 font-semibold text-orange-950">
            <div className="flex">
              <div className="flex rounded-full gap-4 bg-orange-100 p-2">
                <div
                  onClick={() => setActiveCategory("news")}
                  className={`px-6 py-2 border text-xs md:text-sm flex justify-center items-center border-amber-400 hover:bg-orange-500 hover:text-orange-50 rounded-full cursor-pointer ${activeCategory === "news" ? "bg-orange-500 text-orange-50":"bg-orange-50 text-orange-900" } `}>
                  News
                </div>
                <div
                  onClick={() => setActiveCategory("magazine")}
                  className={`px-4 py-1 md:px-6 md:py-2 border border-amber-400 text-xs md:text-sm flex justify-center items-center hover:bg-orange-500 hover:text-orange-50 rounded-full cursor-pointer ${activeCategory === "magazine" ? "bg-orange-500 text-orange-50" : "bg-orange-50 text-orange-900"} `}>
                  Magazine
                </div>
              </div>
            </div>
            <div className="flex">
                {activeCategory === "news" ? (
                  <div className="flex rounded-xl md:flex-row md:rounded-full gap-4 bg-orange-100 p-2">
                    <div
                      onClick={() => setNewsAktif("pers")}
                      className={`px-2 py-1 md:px-6 md:py-2 text-xs md:text-sm flex justify-center items-center border border-amber-400 ${newsAktif=== "pers" ? "bg-orange-400 text-orange-50" : "bg-orange-50 text-orange-900"} hover:bg-orange-400 rounded-full hover:text-orange-50 cursor-pointer`}>
                      Siaran Pers
                    </div>
                    <div
                    onClick={() => setNewsAktif("berita")}
                    className={`px-2 py-1 md:px-6 md:py-2 text-xs md:text-sm flex justify-center items-center border border-amber-400 ${newsAktif === "berita" ? "bg-orange-400 text-orange-50" : "bg-orange-50 text-orange-900"} hover:bg-orange-400 hover:text-orange-50 rounded-full cursor-pointer`}>
                    Berita
                    </div>
                    <div
                    onClick={() => setNewsAktif("beritaTeknologi")}
                    className={`px-2 py-1 md:px-6 md:py-2 text-xs md:text-sm flex justify-center items-center rounded-full cursor-pointer hover:bg-orange-400 hover:text-orange-50 border border-amber-400 ${newsAktif === "beritaTeknologi" ? "bg-orange-400 text-orange-50" : "bg-orange-50 text-orange-900"}`}>
                    Berita Teknologi
                  </div>
                </div>
              ) : (
                  <div className="flex rounded-full gap-4 bg-orange-100 p-2">
                    <div
                      onClick={() => setMagazineAktif("knowledge")}
                      className={`px-2 py-1 md:px-6 md:py-2 text-xs md:text-sm flex justify-center items-center border border-amber-400 ${magazineAktif === "knowledge" ? "bg-orange-400 text-orange-50" : "bg-orange-50 text-orange-900"} hover:bg-orange-400 rounded-full hover:text-orange-50 cursor-pointer`}>
                      Knowledge Bulletin
                    </div>
                    <div
                      onClick={() => setMagazineAktif("skillMagazine")}
                      className={`px-2 py-1 md:px-6 md:py-2 text-xs md:text-sm flex justify-center items-center border border-amber-400 ${magazineAktif === "skillMagazine" ? "bg-orange-400 text-orange-50" : "bg-orange-50 text-orange-900"} hover:bg-orange-400 hover:text-orange-50 rounded-full cursor-pointer`}>
                      NextSkill Magazine
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
        {activeCategory === "news" ? (
          <div className="md:min-h-screen p-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-75 md:h-full rounded-xl shadow-2xl px-4 md:px-8">
              <div className="absolute bottom-10 text-xs">
                <span className="">{cardNews[0].kategori}</span>
                <h1 className="font-bold text-md md:text-xl lg:text-2xl">{ cardNews[0].judul}</h1>
                <div className="flex gap-2 justify-content-center items-center">
                  <span><HiOutlineCalendar /></span>
                  <span>{cardNews[0].tanggal}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cardNews.slice(1).map((item, index) => (
                <div
                  key={index}
                  className="relative h-75 md:h-full rounded-xl shadow-2xl px-8">
                <div className="absolute bottom-10">
                <span className="text-sm">{item.kategori}</span>
                <h1 className="font-bold text-sm md:text-md lg:text-lg">{item.judul}</h1>
                <div className="flex gap-2 justify-content-center items-center">
                  <span><HiOutlineCalendar /></span>
                  <span>{item.tanggal}</span>
                </div>
              </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
            <div className="md:h-120 grid md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
              {cardMagazine.map((item, index) => (
                <div
                  key={index}
                  className="hover:text-orange-400 cursor-pointer">
                  <div className={`h-60 md:h-[80%] rounded-xl ${item.bg} shadow-2xl px-8`}></div>
                  <div className="mt-4 px-2">{ item.judul }</div>
                </div>
              ))}
            </div>
        )}
      </div>
    </div>
  );
}
export default ContentSection9;