import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ListItems from '../../../atoms/lists';
import Card from '../../../molecules/CardList';

const MenuContinue = () => {
  const listContinuous = [
    <ListItems isi="Beranda Keberlanjutan" lengkungan="rounded-t-md" />,
    <ListItems isi="Tata Kelola Keberlanjutan" icon={<HiChevronDown className="text-lg" />} />,
    <ListItems isi="Peringkat dan tata kelola keberlanjutan" icon={<HiChevronDown className="text-lg" />} />,
    <ListItems isi="Inisiatif Keberlanjutan" icon={<HiChevronDown className="text-lg" />} />,
    <ListItems isi="Budaya Keberlanjutan" icon={<HiChevronDown className="text-lg" />} />,
    <ListItems isi="Pencapaian, Jejaring & Berita" lengkungan="rounded-b-md" icon={<HiChevronDown className="text-lg" />} />
  ];
  return (
    <div className="hidden md:flex items-center">
      <Card judul="Keberlanjutan" lists={listContinuous} />
  </div>
  );
} 
export default MenuContinue;