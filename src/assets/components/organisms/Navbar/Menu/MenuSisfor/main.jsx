import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const MenuSisfor = () => {
  return (
    <div className="hidden md:flex items-center">
      <div className="relative group">
        <div className="py-4 px-2">
          <span className="text-amber-950 font-semibold cursor-pointer p-2 rounded-md">Media & Informasi</span>
        </div>
        <div className="absolute z-10 hidden group-hover:block bg-orange-50 shadow-lg rounded-md mt-0 ml-4 w-75">
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 rounded-t-md transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Lorem News Room</span>
          </div>
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Keterbukaan Informasi Publik</span>
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Ruang Media</span>
            <HiChevronDown className="text-lg" />
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Publikasi</span>
            <HiChevronDown className="text-lg" />
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 rounded-b-md transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">Pengumuman</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MenuSisfor;