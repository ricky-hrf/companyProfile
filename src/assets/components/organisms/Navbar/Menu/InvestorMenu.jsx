import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ListItems from './lists';
import Card from './card';

const MenuInvest = () => {
  const listInvest = [
    <ListItems isi="General Overview" lengkungan="rounded-t-md" />,
    <ListItems isi="CEO Message" />,
    <ListItems isi="Shareholders" />,
    <ListItems isi="Highlights" icon={<HiChevronDown className="text-lg" />} />,
    <ListItems isi="Investor Publications" icon={<HiChevronDown className="text-lg" />} />,
    <ListItems isi="Bonds" />,
    <ListItems isi="Cradit Ratings" />,
    <ListItems isi="Investor Relation Events" />,
    <ListItems isi="Point Of Contacts" lengkungan="rounded-b-md" />
  ];
  return (
    <div className="hidden md:flex items-center">
      <Card judul="Hubungan Investor" lists={listInvest} />
    </div>
  );
} 
export default MenuInvest;