import { HiArrowRight } from "react-icons/hi";
import Tombol from '../atoms/button';
import Content from "../molecules/content";

const ContentSection3 = () => {
  const isiContent = {
    'judulKecil': "SEKILAS LOREM IPSUM",
    'judul': "Tentang Kami",
    'teks': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolor vero repellat maxime ab, vel neque adipisci, cupiditate sit numquam fugiat blanditiis suscipit expedita eaque quidem. Rem suscipit pariatur magnam!',
    'tombol-pertama': <Tombol icon={<HiArrowRight className="text-lg"/>} text="Selengkapnya" color="text-orange-50" path="tentang-kami"></Tombol>
  };
  return (
    <div className="relative min-h-screen  md:grid grid-cols-2 bg-[url(../public/bg2.jpg)] bg-cover bg-center w-full bg-opacity-100">
      <div class="absolute inset-0 bg-black/50">
        <div className="flex">
          <Content isiContent={isiContent} />
          <div className="hidden md:flex"></div>
        </div>
      </div>
    </div>
  )
}
export default ContentSection3;