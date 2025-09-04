import Navbar from "../organisms/Navbar/main";
import Footer from "../organisms/footer";
import Content from "../molecules/content";
import { dataNavbar } from "../../data/dataNavbar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TentangKami = () => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const duration = 5000;
  const step = 50;
  const intervalTime = duration / step;
  const increment = 100 / step;

  const bgList = [
    {
      isi: "2020-2022",
      paragraf: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate harum nulla veniam necessitatibus voluptatibus aperiam odio, quo quaerat minus illum? Culpa nemo dolor voluptatum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur velit iusto voluptates omnis nisi eum iure ex aliquam pariatur, in sint culpa voluptatibus quia unde eaque atque numquam est perspiciatis! Magnam at eos ipsum nostrum aut, soluta nisi fugiat pariatur porro sint delectus voluptas suscipit eum velit illo obcaecati laborum.",
      bg: "bg-slate-700"
    },
    {
      isi: "2023-2024",
      paragraf: "quo quaerat minus illum? Culpa nemo dolor voluptatum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur velit iusto voluptates omnis nisi eum iure ex aliquam pariatur, in sint culpa voluptatibus quia unde eaque atque numquam est perspiciatis!",
      bg: "bg-slate-500"
    },
    {
      isi: "2025",
      paragraf: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque numquam sapiente perferendis voluptatum impedit nulla officia aperiam molestiae. Odit tempora voluptatem doloremque aliquid labore ab impedit eveniet, reiciendis possimus corporis? Aspernatur expedita cupiditate molestiae! Quidem, animi accusantium incidunt sequi magnam a sit sed voluptatum reiciendis consequuntur molestias, laboriosam, quis aperiam?",
      bg: "bg-slate-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, [increment, intervalTime]);

  useEffect(() => {
    if (progress === 0) {
      setActiveIndex((prev) => (prev + 1) % bgList.length);
    }
  }, [progress, bgList.length]);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const currentData = bgList[activeIndex];

  const isi = {
    "judulKecil": "Home / Tentang Kami",
    "judul": "Tentang Kami",
    "teks": "Kami adalah lembaga kursus komputer inovatif, profesional, terpercaya, modern, kreatif, solutif, inspiratif, berkualitas, efisien, terjangkau, komprehensif, berpengalaman, berfokus pada teknologi serta edukasi interaktif"
  }
  return (
    <div className="">
      <Navbar />
      <div className="relative h-120 bg-[url(../public/bg2.jpg)] bg-cover bg-center w-full bg-opacity-100">
        <div className="absolute inset-0 bg-black/50">
          <div className="flex">
            <Content isiContent={isi} />
            <div className="hidden md:flex"></div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 bg-white">
        <div className="hidden md:grid grid-cols-4 p-2 gap-2 font-serif">
          {dataNavbar[0].children.map((item, index) => (
            <div key={index}>
              <Link to={`${item.path}`} className="flex justify-center items-center py-2 border-2 border-orange-400 cursor-pointer rounded-full text-orange-900 hover:bg-orange-400 hover:text-orange-50 ">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id="tentang" className="p-2 md:p-4 md:mx-20 font-serif">
        <div className="flex flex-col gap-5 px-5 md:px-10">
          <h1 className="text-xl font-semibold">{dataNavbar[0].children[0].title}</h1>
          <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate harum nulla veniam necessitatibus voluptatibus aperiam odio, quo quaerat minus illum? Culpa nemo dolor voluptatum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur velit iusto voluptates omnis nisi eum iure ex aliquam pariatur, in sint culpa voluptatibus quia unde eaque atque numquam est perspiciatis! Magnam at eos ipsum nostrum aut, soluta nisi fugiat pariatur porro sint delectus voluptas suscipit eum velit illo obcaecati laborum.</p>
        </div>
      </div>
      <div id="sejarah" className="p-2 md:p-4 mx-2 md:mx-20 font-serif">
        <div className="flex flex-col gap-5 px-5 md:px-10 mb-5">
          <h1 className="text-xl font-semibold">{dataNavbar[0].children[1].title}</h1>
        </div>
        <div className={`relative ${currentData.bg} min-h-80 md:mx-10`}>
          <div className="absolute w-full top-5 grid grid-cols-3 gap-5 px-10">
            {bgList.map((i, index) => (
              <div key={index} className="h-1 border border-orange-400 rounded overflow-hidden">
                <div className={`h-full bg-orange-400 rounded overflow-hidden`} style={{ width:`${index === activeIndex ? progress: 0 }%` }}></div>
              </div>
            ))}
          </div>
          <div className="pt-10 pb-4 px-5 md:p-10 top-10  flex flex-col gap-4">
            <h1 className="text-xl md:text-2xl font-semibold text-orange-50">{currentData.isi}</h1>
            <p className="text-sm md:text-md text-orange-50">
              {currentData.paragraf}
            </p>
          </div>
        </div>
      </div>
      <div id="vimi" className="p-2 md:p-4 mx-2 md:mx-20 font-serif">
        <div className="flex flex-col gap-5 px-5 md:px-10 mb-5">
          <h1 className="text-xl font-semibold">{dataNavbar[0].children[2].title}</h1>
        </div>
        <div className="flex flex-col gap-5 p-10 bg-amber-400 rounded-4xl text-orange-50">
          <div className="flex flex-col md:flex-row gap-4">
            <span className="text-xl font-semibold mr-10">Visi</span>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus at reprehenderit nesciunt mollitia iusto cupiditate, excepturi natus laborum laudantium itaque?</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <span className="text-xl font-semibold mr-10">Misi</span>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam ipsa laudantium deleniti amet tenetur expedita ullam quod harum! Ab ipsum veritatis pariatur ea nisi!</p>
          </div>
        </div>
      </div>
      <div id="struktur" className="p-2 md:p-4 mx-2 md:mx-20 font-serif">
        <div className="flex flex-col gap-5 px-5 md:px-10 mb-5">
          <h1 className="text-xl font-semibold">{dataNavbar[0].children[3].title}</h1>
        </div>
        <div className="flex flex-col gap-4 mb-10 text-justify px-10">
            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum magni fugit labore doloremque, deserunt eum magnam minima ipsum. Suscipit, hic.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ab, error culpa excepturi voluptas odio repudiandae quisquam cupiditate possimus aspernatur neque libero est dicta rerum. Odit quam facilis maxime, nam sint placeat sequi veniam eum.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, inventore.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default TentangKami;