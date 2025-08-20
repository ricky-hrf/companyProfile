import Daftar from '../../../atoms/lists';
import Card from '../../../molecules/CardList';
import CardListMobile from '../../../molecules/CardListMobile';

const MenuAbout = () => {
  const item = [
    <Daftar isi="Sekilas Lorem Ipsum" lengkungan="rounded-t-md" />,
    <Daftar isi="Sejarah" />,
    <Daftar isi="Visi & Misi" />,
    <Daftar isi="Struktur Organisasi" />,
    <Daftar isi="Dewan Direksi" />,
    <Daftar isi="Dewan Komisaris" lengkungan="rounded-b-md" />
  ];
  return (
    <div className="hidden md:flex items-center">
      <Card judul="Tentang kami" lists={item} />
    </div>
  );
}
export default MenuAbout;


