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
    <ListItem isi="lorem ipsum" lengkungan="rounded-t-md" />,
    <ListItem
      isi="Subholding"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 1}
      onToggle={() => handleToggle(1)}
    >
      <ListItem isi="Upstream Subholding" />
      <ListItem isi="Gas Subholding" />
      <ListItem isi="Power & NRE Subholding" />
      <ListItem isi="Comercial & Trading Subholding" />
      <ListItem isi="Integrated Marine Logistik Subholding" />
    </ListItem>,
    <ListItem
      isi="AP & Services"
      icon={<HiChevronDown className="text-lg" />}
      isOpen={openIndex === 2}
      onToggle={() => handleToggle(2)}
    >
      <ListItem isi="Service A" />
      <ListItem isi="Service B" />
      <ListItem isi="Service C" />
      <ListItem isi="Service D" />
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