import { HiChevronDown} from "react-icons/hi";

import ListItem from '../atoms/lists';
const CardListMobile = () => {
  return (
    <div className="origin-top absolute right-0 left-0 md:hidden bg-orange-50 p-2 shadow-xl transform transition-all duration-300 ease-in-out">
      <ListItem isi="Tentang kami" icon={<HiChevronDown className="text-xl"/>}/>
      <ListItem isi="Bisnis Kami" icon={<HiChevronDown className="text-xl"/>}/>
      <ListItem isi="Hubungan Investor" icon={<HiChevronDown className="text-xl"/>}/>
      <ListItem isi="Media & Informasi" icon={<HiChevronDown className="text-xl"/>}/>
      <ListItem isi="Keberlanjutan" icon={<HiChevronDown className="text-xl"/>}/>
    </div>
  );
}
export default CardListMobile;