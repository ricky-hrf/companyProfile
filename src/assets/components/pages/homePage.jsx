import Navbar from "../organisms/Navbar/main";
import Tombol from '../atoms/button';
import { HiArrowRight } from "react-icons/hi";

const homePage = () => {
  return (
    <div className="bg-orange-50">
      <div className="h-screen bg-[url(../public/background.jpg)] bg-cover bg-center w-full">
      <Navbar />
      </div>
      <div className="min-h-screen bg-orange-50 md:grid grid-cols-2">
        <div className="h-full">
        </div>
        <div className="h-screen p-6 flex flex-col gap-4 justify-center items-center ">
          <div className="p-6">
            <span className="text-md text-orange-400 md:text-lg font-semibold mb-2">LOREM IPSUM</span>
            <h1 className="text-2xl md:text-4xl text-orange-950 font-semibold mb-4">Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="text-md md:text-lg text-justify mt-4 text-orange-950">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quia culpa exercitationem assumenda hic consectetur sunt labore sequi doloremque esse. Similique quia doloribus magni quasi voluptates possimus et reprehenderit, officiis veniam, ipsum est fugit facilis delectus dolore vitae, optio molestias consectetur. Dignissimos voluptatibus nobis perspiciatis maxime tempora dolor, iste quasi!</p>
          </div>
          <Tombol icon={<HiArrowRight className="text-lg" />}></Tombol>
        </div>
      </div>
    </div>
  )
}
export default homePage;