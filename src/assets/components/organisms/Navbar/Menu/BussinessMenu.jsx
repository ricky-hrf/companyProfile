import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ListItem from "./lists";
import Card from './card';

const Bussiness = () => {
  const listBussiness = [
    <ListItem isi="lorem ipsum" lengkungan="rounded-t-md" />,<ListItem isi="Subholding" icon={<HiChevronDown className="text-lg" />} />,
    <ListItem isi="AP & Services" icon={<HiChevronDown className="text-lg" />} />,
    <ListItem isi="Global Presence" lengkungan="rounded-b-md" />
  ];
  return (
    <div className="hidden md:flex items-center">
      <Card judul = "Bisnis Kami" lists={listBussiness} />
    </div>
  );
}
export default Bussiness;