import Navbar from "../organisms/Navbar/main";
import Footer from "../organisms/footer";
import Content from "../molecules/content";
import { dataNavbar } from "../../data/dataNavbar";
import { dataInvestor } from "../../data/dataInvestor";
import Tombol from "../atoms/button";
import { HiArrowNarrowRight, HiMenu } from "react-icons/hi";

const InvestorPage = () => {
  
  const isi = {
    "judulKecil": "Home / Hubungan Investor",
    "judul": "Hubungan Investor",
    "teks": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officia facilis qui a illum amet, modi numquam vitae ut molestiae"
  }

  const dataHighlights = [
    {
      "jenis": "PENDAPATAN(2024)",
      "jumlah": "USD 10,45 Juta",
      "desc": "Ini pendapatan ecek ecek yah, jangan terlalu serius"
    },
    {
      "jenis": "TOTAL LABA(2024)",
      "jumlah": "USD 50 Ribu",
      "desc": "Ini juga laba bercanda, santai aja"
    }
  ]
  return (
    <div className="bg-orange-50 text-orange-900">
      <Navbar />
        <div className="w-full relative h-120 bg-[url(../public/bgInvestorPage.jpg)] bg-cover bg-center mb-4">
          <div className="absolute inset-0 bg-black/50">
            <div className="flex">
              <Content isiContent={isi} />
              <div className="hidden md:flex"></div>
            </div>
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 mt-10  font-serif">
        <div className="col-span-3 h-full">
          <div className="hidden md:flex flex-col sticky top-20 self-start border-l-2 border-amber-400">
            {dataNavbar[2].children.map((subMenu, i) => (
              <div key={i} className="w-full px-6 py-3 bg-orange-50 hover:bg-orange-100 rounded-r-xl cursor-pointer">
                <span>{subMenu.title}</span>
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <HiMenu />
          </div>
        </div>
        <div className="grid-cols-1 md:col-span-9 self-start">
          <div id="ceo-message" className="border-b border-orange-200 mb-10 pb-10">
            <h1 className="text-2xl mb-8 font-semibold">CEO Message</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full lg:h-80">
              <div className="col-span-3 bg-[url(../public/direktur.jpg)] w-full h-60 md:h-75 bg-cover bg-center"></div>
              <div className="col-span-9 flex flex-col gap-4 md:px-8">
                <p className="text-justify">Ngoding itu kadang seperti cinta, semakin dikejar malah semakin lari, semakin ditatap malah makin bikin pusing. Bedanya, kalau cinta bikin baper, ngoding bikin error merah berjajar kayak lampu natal. Lucunya, kita sering bilang “istirahat dulu ah biar segar”, tapi begitu buka laptop lagi, bug-nya tetap setia menunggu dengan wajah yang sama. Kadang rasanya pengen nyerah, tapi di sisi lain, ada kepuasan aneh ketika satu baris kode berhasil bikin dunia terasa lebih waras. Jadi ya begitulah, programmer itu sebenarnya romantis—setia sama error, sabar sama bug, dan selalu berharap besok compile bisa langsung jalan tanpa drama.</p>
                <div className="flex flex-col">
                  <span className="text-xl font-semibold">Panggil Aja Om</span>
                  <span>Direktur Utama Serprom</span>
                </div>
                <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-xl" />}/>
              </div>
            </div>
          </div>
          <div id="shareholders" className="mt-10 py-10 ">
            <h1 className="text-2xl mb-8 font-semibold">Shareholders</h1>
            <div className="flex flex-col gap-5 mr-10">
              <p>Menjadi programmer itu mirip jadi detektif: ada kasus misterius bernama bug, ada tersangka utama bernama titik koma, dan ada saksi bisu bernama console.log. Kadang solusi terasa deket banget, tapi pas dijalankan, hasilnya malah tambah kacau.</p>
              <p>
                Ngoding itu aneh, kadang cuma lupa titik koma bisa bikin semalaman gelisah seperti habis ditinggal gebetan. Error merah berjejer rapi di layar, persis lampu natal yang nyalanya bikin stres, bukan bahagia. Programmer sering bilang, “sekali lagi coba run,” padahal sudah ke-seratus kalinya. Tapi anehnya, begitu satu bug berhasil diatasi, rasa senangnya bisa ngalahin diskon 11.11. Dunia koding memang melelahkan, tapi justru di situ letak candunya.
              </p>
              <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-xl" />}/>
            </div>
          </div>
          <div id="highlits" className="mt-10 py-5 md:py-10 px-5 md:px-10 bg-orange-100">
            <h1 className="mb-5 text-2xl font-semibold">Highlights</h1>
            <div className="flex flex-col md:flex-row gap-4 pb-10 border-b border-orange-200">
              {dataHighlights.map((data, i) => (
                <div key={i} className="w-full flex flex-col gap-5">
                  <span className="text-sm">{data.jenis}</span>
                  <span className="text-2xl md:text-5xl font-semibold">{data.jumlah}</span>
                  <p className="text-xs md:sm lg:md">{data.desc}</p>
                </div>
              ))}
            </div>
            <div className="py-10">
              <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-xl" />}/>
            </div>
          </div>
          <div id="investor-publication" className="mt-10 py-10">
            <h1 className="mb-5 text-2xl font-semibold">Investor Publication</h1>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <h2 className="text-lg font-semibold">{dataInvestor[0].title}</h2>
                  <div className="">{dataInvestor[0].tombol}</div>
                </div>
                <div className="flex flex-col w-full justify-between gap-5 py-5">
                  <div className="flex gap-5">
                    {dataInvestor[0].children.map((item, i) => (
                      <div key={i} className="w-full flex flex-col gap-10">
                        <img className="w-32 h-48 shadow-lg rounded-lg" src={item.gambar} />
                        <div className="w-full flex flex-col justify-center gap-3">
                          <span className="font-semibold">{item.title}</span>
                          <span className="cursor-pointer self-start hover:underline hover:text-orange-700">{item.unduh}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
            {dataInvestor.slice(1).map((item, j) => (
              <div key={j} className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-5">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <div className="">{item.tombol}</div>
                </div>
                <div className="w-full flex flex-col gap-3 mt-2">
                  {item.children.map((list, k) => (
                    <div className="flex justify-between px-5 py-2 bg-white rounded-lg">
                      <div key={k} className="">{list.title}</div>
                      <div className="hover:underline cursor-pointer">{list.unduh}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default InvestorPage;