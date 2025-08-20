import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import ListItems from '../../../atoms/lists';
import Card from '../../../molecules/CardList';
import { useState } from "react";

const MenuContinue = () => {
  const [openIndex, setOpenIndex] = useState();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const listContinuous = [
    <ListItems isi="Beranda Keberlanjutan" lengkungan="rounded-t-md" />,
    <ListItems
      isi="Tata Kelola Keberlanjutan"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 1}
      onToggle={() => handleToggle(1)}
    >
      <ListItems isi="Komite Keberlanjutan" />
      <ListItems isi="Strategi, kebijakan & Manajemen" />
    </ListItems>,
    <ListItems
      isi="Peringkat dan tata kelola keberlanjutan"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 2}
      onToggle={() => handleToggle(2)}
    >
      <ListItems isi="Peringkat ESG"/>
      <ListItems isi="Laporan Keberlanjutan"/>
      <ListItems isi="Keuangan Keberlanjutan dan Transparansi Pajak"/>
    </ListItems >,
    <ListItems
      isi="Inisiatif Keberlanjutan"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 3}
      onToggle={() => handleToggle(3)}>
      <ListItems isi="Inisiatif Prioritas Unggulan"/>
      <ListItems isi="Kinerja ESG"/>
      <ListItems isi="Kinerja Dekarbonisasi Lorem ipsum"/>
    </ListItems>,
    <ListItems
      isi="Budaya Keberlanjutan"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 4}
      onToggle={() => handleToggle(4)}>
      <ListItems isi="Sustainability Academy" />
      <ListItems isi="Program Budaya Keberlanjutan" />
      </ListItems>,
    <ListItems
      isi="Pencapaian, Jejaring & Berita" lengkungan="rounded-b-md"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 5}
      onToggle={() => handleToggle(5)}>
      <ListItems isi="Penghargaan Keberlanjutan"/>
      <ListItems isi="Jejaring Keberlanjutan"/>
      <ListItems isi="Berita Keberlanjutan"/>
      <ListItems isi="Wawasan Keberlanjutan"/>
      </ListItems>
  ];
  return (
    <div className="hidden md:flex items-center">
      <Card judul="Keberlanjutan" lists={listContinuous} posisi="right-0"/>
  </div>
  );
} 
export default MenuContinue;