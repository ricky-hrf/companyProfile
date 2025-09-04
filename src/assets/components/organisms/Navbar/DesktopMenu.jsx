import { useState } from "react";
import { dataNavbar } from "../../../data/dataNavbar";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const tombolSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className="hidden md:flex space-x-6 font-serif px-6 mr-6">
      {dataNavbar.map((item, i) => (
        <div key={i} className="relative group">
          <div className="py-4 px-2">
            <span className="text-amber-950 font-semibold cursor-pointer p-2 rounded-md">
              {item.title}
            </span>
          </div>
          {item.children && (
            <div className="absolute z-10 transform origin-top transition-all duration-300 scale-y-0 h-0 group-hover:scale-y-100 group-hover:h-auto bg-orange-50 shadow-lg rounded-md mt-0 lg:right-0 w-75">
              {item.children.map((list, j) => (
                <div key={j} className="py-2 px-4 hover:bg-orange-100 cursor-pointer rounded-md">
                  <div onClick={() => tombolSubMenu(j)} className="flex flex-col justify-between">
                    <Link to={list.path} className="flex justify-between">
                      <span className="text-orange-950 text-md font-semibold">
                        {list.title}
                      </span>
                        {list.children && (
                        <div className=" text-md text-orange-950">
                          {openSubMenu === j ? (<HiChevronUp/>):(<HiChevronDown />)}
                          </div>
                        )}
                    </Link>
                    {list.children && openSubMenu === j && (
                      <div className="flex flex-col mt-2 ml-4">
                        {list.children.map((isi, k) => (
                          <div className="text-orange-950 p-2 hover:bg-orange-50 hover:text-orange-800 rounded-md" key={k}>
                            <span>{isi.title}</span>
                          </div>
                        ))}
                      </div>
                  )}
                  </div>
                  </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default DesktopMenu;