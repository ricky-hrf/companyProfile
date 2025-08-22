import { HiMenu,HiMoon, HiSearch } from "react-icons/hi";
import Logo from "./logo/main";
import MenuAbout from "./Menu/Main";
import MenuBussiness from "./Menu/BussinessMenu";
import MenuInvest from "./Menu/InvestorMenu";
import MenuSisfor from "./Menu/SisforMenu";
import MenuContinue from "./Menu/ContinueMenu";
import { useEffect, useState } from "react";
import iconStyle from "../../atoms/icon";
import CardListMobile from "../../molecules/CardListMobile";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex">
            <MenuAbout />
            <MenuBussiness/>
            <MenuInvest/>
            <MenuSisfor/>
            <MenuContinue/>
          </div>
          <div className="flex gap-2">
            {iconStyle(HiSearch)}
            {iconStyle(HiMoon, '',setDarkMode)}
            { iconStyle(HiMenu, '', handleClick,"md:hidden") }
          </div>
        </div>
      </div>
      {open && (
        <CardListMobile />
      )}
    </div>
  )
}
export default Navbar;