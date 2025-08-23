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
  const [show, setShow] = useState(true);

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
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-2">
        <div className={`fixed top-0 left-0 w-full px-4 bg-orange-50 shadow-xl transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"} z-999`}>
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
          {open && (
              <CardListMobile />
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar;