import Paragraf from "../molecules/Paragraf";
import Tombol from '../atoms/button'
import { HiArrowRight } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import iconStyle from "../atoms/icon";

const ContentSection6 = () => {
  const isiParagraf =
      {
        'judul': 'INVESTOR',
        'subJudul': 'Hubungan Investor',
      'isi': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, maiores eveniet reiciendis quam magni sed cupiditate unde maxime possimus nesciunt. Lorem ipsum dolor, sit amet consectetur',
      'tombol' : <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya"></Tombol>
    }
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <Paragraf data={isiParagraf} display="flex-2" padding="px-6" />
      <div className="flex-8 relative flex flex-row">
        <div className="flex-1 bg-green-400"></div>
        <div className="absolute h-80 w-70 bg-orange-500 rounded-lg shadow-2xl z-[998] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative p-8">
            <h1 className="text-orange-50 font-serif font-bold text-2xl mb-4">Shareholders</h1>
            <p className="text-orange-50 font-serif py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum unde ut neque voluptatem cupiditate</p>
            <div className="absolute right-10 bottom-0 translate-y-1/2">
              {iconStyle(FiArrowUpRight)}
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}
export default ContentSection6;