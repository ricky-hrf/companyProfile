import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const MenuContinue = () => {
  return (
    <div className="hidden md:flex items-center">
      <div className="relative group">
        <div className="py-4 px-2">
          <span className="text-amber-950 font-semibold cursor-pointer p-2 rounded-md">Keberlanjutan</span>
        </div>
        <div className="absolute z-10 hidden group-hover:block bg-orange-50 shadow-lg rounded-md w-75 right-0">
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 rounded-t-md transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Beranda Keberlanjutan</span>
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              Tata Kelola Keberlanjutan
            </span>
            <HiChevronDown className="text-lg" />
          </div>
          <div className="flex items-center px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Peringkat dan tata kelola keberlanjutan</span>
            <HiChevronDown className="text-lg" />
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Inisiatif Keberlanjutan</span>
            <HiChevronDown className="text-lg" />
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Budaya Keberlanjutan</span>
            <HiChevronDown className="text-lg" />
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 rounded-b-md transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Pencapaian, Jejaring & Berita</span>
            <HiChevronDown className="text-lg" />
          </div>
        </div>
      </div>
  </div>
  );
} 
export default MenuContinue;