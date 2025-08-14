import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const MenuInvest = () => {
  return (
    <div className="hidden md:flex items-center">
      <div className="relative group">
        <div className="py-4 px-2">
          <span className="text-amber-950 font-semibold cursor-pointer p-2 rounded-md">Hubungan Investor</span>
        </div>
        <div className="absolute z-10 hidden group-hover:block bg-orange-50 shadow-lg rounded-md ml-4 w-75">
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 rounded-t-md transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">General Overview</span>
          </div>
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              CEO Message
            </span>
          </div>
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              Shareholders
            </span>
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              Highlights
            </span>
            <HiChevronDown className="text-lg" />
          </div>
          <div className="flex justify-between px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              Investor Publications
            </span>
            <HiChevronDown className="text-lg" />
          </div>
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              Bonds
            </span>
          </div>
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              Cradit Ratings
            </span>
          </div>
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              Investor Relation Events
            </span>
          </div>
          <div className="flex px-4 py-2 text-sm text-orange-900 hover:text-amber-950 border-l-2 border-transparent hover:border-orange-400 hover:bg-orange-100 rounded-b-md transition-all duration-200 ease-in-out cursor-pointer">
            <span className="font-semibold">
              Point Of Contacts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 
export default MenuInvest;