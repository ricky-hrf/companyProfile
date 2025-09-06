import { HiArrowRight } from "react-icons/hi";
import Icon from '../atoms/icon'

const cardGambar = ({ judul = 'default', isi, kelas= 'bg-orange-300' }) => {
  
  return (
    <>
      <div className={`relative flex-1 ${kelas} cursor-pointer flex flex-col justify-end bg-opacity-100`}>
        <div className="absolute inset-0 bg-black/50 hover:bg-black/20">
          <div className="h-full flex flex-col justify-center p-6">
            <span className="text-orange-50 font-semibold font-serif text-md">{ judul}</span>
            <h2 className="text-orange-50 font-semibold font-serif text-2xl mt-2">{isi}</h2>
            <div className="mt-4">
              {Icon(HiArrowRight,'','','border border-orange-50')}  
            </div>
          </div>
        </div>
      </div>
      </>
  );
} 
export default cardGambar;