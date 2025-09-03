import { useState } from "react";
import { dataNavbar } from "../../../data/dataNavbar";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleClickMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  }

  const handleClickSubMenu = (parentIndex, subIndex) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [parentIndex]:
        prev[parentIndex] === subIndex ? null : subIndex,
    }))
  }

  return (
    <div className="md:hidden px-2 font-serif">
      {dataNavbar.map((menu, index) => (
        <div key={index} className=" py-2 text-orange-900">
          <div
            onClick={() => handleClickMenu(index)}
            className={`flex justify-between transform origin-top transition-all duration-300`}>
            <span>{menu.title}</span>
            {menu.children && (
              <div className="text-md">
                {openMenu === index ? (<HiChevronUp />): (<HiChevronDown />)}</div>
            )}
          </div>
          {menu.children && openMenu === index && (
            <div className={`px-4 text-sm overflow-hidden transition-all duration-500 ease-in-out ${openMenu === index ? "max-h-full" : "max-h-0"}`}>
              {menu.children.map((subMenu, j) => (
                <div
                  key={j}
                  className="py-2">
                  <div onClick={() => handleClickSubMenu(index, j)} className="flex justify-between">
                    <span>{subMenu.title}</span>
                    {subMenu.children && (
                      <div className="text-md">
                        {openSubMenu[index] === j ? (<HiChevronUp />): (<HiChevronDown />)}
                      </div>
                    )}
                  </div>
                  {subMenu.children && openSubMenu[index] === j && (
                    <div className="px-4 py-2">
                      {subMenu.children.map((list, k) => (
                        <div key={k} className="p-2">
                          <span>{ list.title }</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
export default MobileMenu;