import Navbar from "../organisms/Navbar/main";
import Tombol from '../atoms/button';
import { HiArrowRight } from "react-icons/hi";
import Footer from '../organisms/footer';

const homePage = () => {
  return (
    <div className="bg-orange-50">
      <div className="relative h-screen bg-[url(../public/background.jpg)] bg-cover bg-center w-full">
        <div className="absolute inset-0 bg-black/10">
          <Navbar />
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
      <div className="relative min-h-screen  md:grid grid-cols-2 bg-[url(../public/bg2.jpg)] bg-cover bg-center w-full bg-opacity-100">
        <div class="absolute inset-0 bg-black/50">
          <div className="flex">
            <div className="md:w-1/2 min-h-screen flex items-center p-6">
              <div className="flex flex-col gap-4">
                <div className="text-orange-50 font-semibold text-sm md:text-md">SEKILAS LOREM IPSUM</div>
                <div className="text-orange-50 font-bold text-2xl md:text-3xl">Tentang Kami</div>
                <div className="text-orange-50 mb-8 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolor vero repellat maxime ab, vel neque adipisci, cupiditate sit numquam fugiat blanditiis suscipit expedita eaque quidem. Rem suscipit pariatur magnam!</div>
                <div className="relative">
                  <div className="absolute">
                    <div className="flex flex-col lg:flex-row gap-4 text-left">
                      <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya" color="text-orange-50"></Tombol>
                      <Tombol icon={<HiArrowRight className="text-lg" />} text="Direksi dan Komisaris" color="text-orange-50"></Tombol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default homePage;