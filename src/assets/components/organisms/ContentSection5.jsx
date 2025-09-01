import CardGambar from '../molecules/CardGambar';

const ContentSection5 = () => {
  const dataContent = [
    {
      "judul" : "PROFIL IPSUM",
      "isi": "Layanan Informasi Publik",
      "background" : "bg-amber-400"
    },
    {
      "judul" : "INFORMASI",
      "isi": "Harga Lorem Ipsum",
      "background" : "bg-amber-600"
    },
    {
      "judul" : "THH",
      "isi": "Tata Kelola Lorem",
      "background" : "bg-amber-500"
    },
    {
      "judul" : "REKRUTMEN",
      "isi": "Menjadi Ultraman",
      "background" : "bg-amber-700"
    }
  ];
  return (
    <div className="min-h-screen flex flex-col lg:flex-row w-full">
      {dataContent.map((item, index) => (
        <CardGambar key={index} judul={item.judul} isi={item.isi} kelas={item.background} />
      ))}
    </div>
  );
}
export default ContentSection5;