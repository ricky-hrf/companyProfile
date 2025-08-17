import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ListItems from '../../../atoms/lists';
import Card from '../../../molecules/CardList';
import { useState } from "react";

const MenuSisfor = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }

  const sisfor = [
    <ListItems isi="Lorem News Room" lengkungan="rounded-t-md" />,
    <ListItems isi="Keterbukaan Informasi Publik" />,
    <ListItems
      isi="Ruang Media"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 1}
      onToggle={() => handleToggle(1)}
    >
      <ListItems isi="Siaran Pers" />
      <ListItems isi="Energia Update" />
      <ListItems isi="Berita CSR" />
      <ListItems isi="Galeri" />
    </ListItems>,
    <ListItems
      isi="Publikasi"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 2}
      onToggle={() => handleToggle(2)}
    >
      <ListItems isi="Katalog"/>
    </ListItems>,
    <ListItems isi="Pengumuman" lengkungan="rounded-b-md" />
  ];
  return (
    <div className="hidden md:flex items-center">
      <Card judul="Media & Informasi" lists={sisfor} />
    </div>
  );
}
export default MenuSisfor;