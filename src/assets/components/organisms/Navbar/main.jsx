import { HiMenu } from "react-icons/hi";
import Logo from "./logo/main";
import MenuAbout from "./Menu/Main";
import MenuBussiness from "./Menu/BussinessMenu";
import MenuInvest from "./Menu/InvestorMenu";
import MenuSisfor from "./Menu/SisforMenu";
import MenuContinue from "./Menu/ContinueMenu";

const Navbar = () => {
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
            <HiMenu className="md:hidden text-2xl text-orange-900 hover:text-amber-950"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;