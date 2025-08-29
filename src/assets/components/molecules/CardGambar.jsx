import { HiArrowRight } from "react-icons/hi";
import Icon from '../atoms/icon'

const cardGambar = ({ judul = 'default', isi, kelas= 'bg-orange-300' }) => {
  
  return (
    <>
      <div className={`flex-1 ${kelas} hover:bg-amber-800 cursor-pointer flex flex-col justify-end`}>
        <div className="h-1/2 flex flex-col justify-center p-6">
          <span className="text-orange-50 font-semibold font-serif text-md">{ judul}</span>
          <h2 className="text-orange-50 font-semibold font-serif text-2xl mt-2">{isi}</h2>
          <div className="mt-4">
            {Icon(HiArrowRight,'','','border border-orange-50')}  
          </div>
        </div>
      </div>
      </>
  );
} 
export default cardGambar;