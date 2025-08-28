import Paragraf from "../molecules/Paragraf";
import Tombol from '../atoms/button';
import { HiArrowRight } from "react-icons/hi";
import CardArtikel from "../molecules/CardArtikel";

const ContentSection7 = () => {
  const isiContent = {
    'judul': "KEBERLANJUTAN",
    'subJudul': "Keberlanjutan",
    'isi': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolor vero repellat maxime ab,  cupiditate sit numquam fugiat blanditiis suscipit expedita eaque quidem. Rem suscipit pariatur magnam!',
    'tombol': <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya" color="text-orange-950"></Tombol>,
  }

  const isiCard = [
    {
    'background': "bg-amber-500",
    'judulArtikel': 'Judul Artikel 1',
      'paragraf': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit',
    'tombol':<Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya" color="text-orange-950"></Tombol>
    },
    {
    'background': "bg-amber-400",
    'judulArtikel': 'Judul Artikel 2',
      'paragraf': 'Lorem ipsum dolor sit amet adipisicing elit. Quasi, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit',
    'tombol': <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya" color="text-orange-950"></Tombol>
    },
    {
    'background': "bg-amber-700",
    'judulArtikel': 'Judul Artikel 3',
      'paragraf': 'Lorem  Quasi, officia. Lorem ipsum dolor sit amet',
    'tombol': <Tombol icon={<HiArrowRight className="text-lg" />} text="Selengkapnya" color="text-orange-950"></Tombol>
    }
  ]

  return (
    <div className="mb-8">
      <Paragraf data={isiContent} display="py-8 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {isiCard.map((item, index) => (
          <CardArtikel key={index} background={item.background} judulArtikel={item.judulArtikel} paragraf={item.paragraf} Tombol={item.tombol} />
        )
        )}
      </div>
    </div>
  )
}
export default ContentSection7;