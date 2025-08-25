import CardGambar from '../molecules/CardGambar';

const contentSection5 = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      <CardGambar judul='PROFIL IPSUM' isi="Layanan Informasi Publik" kelas='bg-orange-500'/>
      <CardGambar judul='INFORMASI' isi="Harga Lorem Ipsum" kelas='bg-orange-400'/>
      <CardGambar judul='THH' isi="Tata Kelola Lorem"/>
      <CardGambar judul='Rekrutmen' isi="Menjadi Ultraman" kelas='bg-orange-600'/>
    </div>
  );
}
export default contentSection5;