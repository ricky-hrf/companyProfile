import Navbar from "../organisms/Navbar/main";
import Footer from "../organisms/footer";
import Content from "../molecules/content";
import { dataNavbar } from "../../data/dataNavbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const BisnisKami = () => {
  const location = useLocation();

  const isi = {
    "judulKecil": "Home / Bisnis Kami",
    "judul": "Bisnis Kami",
    "teks": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officia facilis qui a illum amet, modi numquam vitae ut molestiae"
  }

  useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);

  return (
    <div className="w-full h-full">
      <Navbar />
        <div className="relative h-140 bg-[url(../public/background4.jpg)] bg-cover bg-center w-full bg-opacity-100">
        <div className="absolute inset-0 bg-black/50">
          <div className="flex">
            <Content isiContent={isi} />
            <div className="hidden md:flex"></div>
          </div>
        </div>
        </div>
      <div className="sticky top-0 bg-white">
        <div className="hidden md:grid grid-cols-2 p-2 gap-2 justify-between font-serif">
          <Link to="#subholding" className="flex justify-center items-center py-2 border-2 border-orange-400 cursor-pointer rounded-full text-orange-900 hover:bg-orange-400 hover:text-orange-50">
            {dataNavbar[1].children[1].title}
          </Link>
          <Link to="#services" className="flex justify-center items-center py-2 border-2 border-orange-400 cursor-pointer rounded-full text-orange-900 hover:bg-orange-400 hover:text-orange-50">
            {dataNavbar[1].children[2].title}
          </Link>
        </div>
      </div>
      <div id="subholding" className="min-h-screen p-10 md:mx-10 text-orange-900 font-serif">
        <span className="font-semibold text-2xl my-4"> {dataNavbar[1].children[1].title}</span>
        <p className="text-md text-justify my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut labore a optio, impedit animi, sunt exercitationem dolorem deleniti in, adipisci quae repellat. Exercitationem libero nemo quibusdam vero voluptatem doloribus recusandae qui modi sunt! Quo architecto inventore, deserunt itaque ducimus dolore veritatis saepe. Nesciunt eius placeat, fugiat provident accusantium in perferendis!</p>
        <div className="my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 py-4">
          {dataNavbar[1].children[1].children.map((elemen, i) => (
            <div key={i} className="group relative h-70 cursor-pointer [perspective:1000px]">
              <div className="relative w-full h-full flex justify-center items-center rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className={`absolute inset-0 ${elemen.background} text-orange-50 flex px-4 rounded-xl [backface-visibility:hidden]`}>
                  <h1 className="text-xl font-bold mt-10">
                    {elemen.title}
                  </h1>
                </div>
                <div className="text-amber-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h1 className="text-xl font-bold top-20">Belakang</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="services" className="min-h-screen p-10 md:mx-10 text-orange-900 font-serif">
        <span className="font-semibold text-2xl my-4"> {dataNavbar[1].children[2].title}</span>
        <p className="text-md text-justify my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut labore a optio, impedit animi, sunt exercitationem dolorem deleniti in, adipisci quae repellat. Exercitationem libero nemo quibusdam vero voluptatem doloribus recusandae qui modi sunt! Quo architecto inventore, deserunt itaque ducimus dolore veritatis saepe. Nesciunt eius placeat, fugiat provident accusantium in perferendis!</p>
        <div className="my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 py-4">
          {dataNavbar[1].children[2].children.map((elemen, i) => (
            <div key={i} className="group relative h-70 cursor-pointer [perspective:1000px]">
              <div className="relative w-full h-full flex justify-center items-center rounded-2xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className={`absolute inset-0 ${elemen.background} text-orange-50 flex px-4 rounded-xl [backface-visibility:hidden]`}>
                  <h1 className="text-xl font-bold mt-10">
                    {elemen.title}
                  </h1>
                </div>
                <div className="text-amber-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <h1 className="text-xl font-bold top-20">Belakang</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default BisnisKami;