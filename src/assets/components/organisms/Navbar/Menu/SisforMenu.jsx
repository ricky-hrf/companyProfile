import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ListItems from './lists';
import Card from './card';

const MenuSisfor = () => {
  const sisfor = [
  <ListItems isi="Lorem News Room" lengkungan="rounded-t-md" />,
    <ListItems isi="Keterbukaan Informasi Publik" />,
    <ListItems isi="Ruang Media" icon={<HiChevronDown className="text-lg" />} />,
    <ListItems isi="Publikasi" icon={<HiChevronDown className="text-lg" />} />,
    <ListItems isi="Pengumuman" lengkungan="rounded-b-md" />];
  return (
    <div className="hidden md:flex items-center">
      <Card judul="Media & Informasi" lists={sisfor} />
    </div>
  );
}
export default MenuSisfor;