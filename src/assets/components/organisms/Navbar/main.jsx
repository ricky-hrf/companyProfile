import { HiMenu } from "react-icons/hi";
import Logo from "./logo/main";
import MenuAbout from "./Menu/Main";
import MenuBussiness from "./Menu/BussinessMenu";
import MenuInvest from "./Menu/InvestorMenu";
import MenuSisfor from "./Menu/SisforMenu";
import MenuContinue from "./Menu/ContinueMenu";
import ListItem from "../../atoms/lists";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";


const Navbar = () => {
  const [open, setOpen] = useState();
  const [openIndex, setOpenIndex] = useState();

  function handleClick() {
    setOpen(!open);
  }

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            <div className="md:hidden flex justify-center items-center p-1 w-10 h-10 rounded-full hover:bg-orange-50 cursor-pointer">
            <HiMenu className="md:hidden text-2xl text-orange-900 hover:text-amber-950"
              onClick={handleClick} action={ open } />
            </div>
        </div>
      </div>
      {open && (
        <div className={`origin-top absolute right-0 left-0 md:hidden bg-orange-50 p-2 shadow-xl transform transition-all duration-300 ease-in-out`}>
          <ListItem
            isi="Tentang kami"
            icon={<HiChevronDown className="text-lg" />}
            isOpen={openIndex === 1}
            onToggle={() => handleToggle(1)}
          >
            <ListItem isi="Sekilas Lorem Ipsum" />
            <ListItem isi="List 2" />
            <ListItem isi="List 3" />
          </ListItem>
          <ListItem isi="Bisnis Kami" icon={<HiChevronDown className="text-lg" />}></ListItem>
          <ListItem isi="Hubungan Investor" icon={<HiChevronDown className="text-lg" />}></ListItem>
          <ListItem isi="Media & Informasi" icon={<HiChevronDown className="text-lg" />}></ListItem>
          <ListItem isi="Keberlanjutan" icon={<HiChevronDown className="text-lg" />}></ListItem>
            </div>
      )}
    </div>
  )
}
export default Navbar;