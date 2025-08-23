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
      <div className="min-h-screen md:h-screen bg-orange-50 flex flex-col">
        <div className="flex-1 md:flex flex-row">
          <div className="flex-[4] flex flex-col justify-center p-6">
            <span className="text-sm text-orange-400 md:text-md font-semibold mb-2">LOREM IPSUM 500</span>
            <div className="text-xl md:text-2xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, vel.</div>
            </div>
          <div className="flex-[4] flex items-center justify-center p-6 text-amber-950 font-semibold text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, maiores eveniet reiciendis quam magni sed cupiditate unde maxime possimus nesciunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, inventore cumque nulla repellendus nostrum nobis, ex, laboriosam voluptates quae nam laborum consequatur expedita beatae ullam dolor tenetur optio aliquam dignissimos.
            </div>
          <div className="flex-[2] flex items-center justify-center">
            <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya"></Tombol>
            </div>
        </div>
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
      <Footer />
    </div>
  )
}
export default homePage;