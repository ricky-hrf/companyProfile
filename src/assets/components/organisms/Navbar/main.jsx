import { HiMenu, HiX} from "react-icons/hi";
import Logo from "./logo/main";
import { useEffect, useState } from "react";
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

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
        <div className={`fixed top-0 left-0 w-full px-4 bg-orange-50 shadow-xl transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"} z-[999]`}>
          <div className="flex flex-row md:flex-col lg:flex-row justify-between items-center">
            <Logo />
            <DesktopMenu />
            <div onClick={handleClick} className="md:hidden transition">
              { open ? (<HiX />) : (<HiMenu />) }
            </div>
          </div>
          {open && (
            <MobileMenu />
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar;