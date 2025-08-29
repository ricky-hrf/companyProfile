import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ListItem from "../../../atoms/lists";
import Card from '../../../molecules/CardList';

const Bussiness = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const listBussiness = [
    <ListItem isi="Edutech" lengkungan="rounded-t-md" />,
    <ListItem
      isi="Subholding"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 1}
      onToggle={() => handleToggle(1)}
    >
      <ListItem isi="Kursus Pemrograman" />
      <ListItem isi="Kursus Desain & Multimedia" />
      <ListItem isi="Kursus Jaringan & Keamanan" />
      <ListItem isi="Hardware & Perakitan" />
      <ListItem isi="ertifikasi & Ujian Kompetensi" />
      <ListItem isi="Edutech & Produk Digital" />
    </ListItem>,
    <ListItem
      isi="AP & Services"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 2}
      onToggle={() => handleToggle(2)}
    >
      <ListItem isi="Software Development Training" />
      <ListItem isi="Network & Cybersecurity Training" />
      <ListItem isi="Data Science & AI Training" />
      <ListItem isi="Multimedia & Design Training" />
      <ListItem isi="Office Productivity Training" />
      <ListItem isi="Computer Hardware & IoT Training" />
    </ListItem>,
    <ListItem isi="Global Presence" lengkungan="rounded-b-md" />
  ];
  return (
    <div className="hidden md:flex items-center">
      <Card judul="Bisnis Kami" lists={listBussiness} />
    </div>
  );
};
      
export default Bussiness;