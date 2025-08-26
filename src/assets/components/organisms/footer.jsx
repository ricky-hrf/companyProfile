import { FiGithub,FiFacebook,FiInstagram,FiLinkedin } from "react-icons/fi";

const footer = () => {
  const data = [
    {
      "judul": "Announcement",
      "isi" : ['Lorem Info','Pengadaan Umum','Pengumuman','E-Procurement','Hubungan Investor','RUPS','Karir']
    },
    {
      "judul": "Network",
      "isi" : ['Subholding Upstream','Subholding Refinery','Lorem, ipsum dolor','Energy','Subholding Gas','Logistics','Commercial & Trading']
    },
    {
      "judul": "AP & Services",
      "isi" : ['PT Lorem Bahan Berkah','PT Sumber Utama','PT Rejeki Anak Sholeh', 'PT Maju Jaya', 'PT Milik Pribadi', 'PT Sukses Selalu', 'Tbk']
    },
    {
      "judul": "Tools",
      "isi" : ['i-Serv','Registrasi Lembaga Penyalur','Tata Kelola Perusahaan', 'Keterbukaan Informasi Publik']
    },
    {
      "judul": "Contact",
      "isi" : ['Telepon','WA','Telegram']
    }
  ]

  const icon = [
    <FiGithub className="text-xs md:text-lg " />,
    <FiFacebook className="text-xs md:text-lg " />,
    <FiInstagram className="text-xs md:text-lg " />,
    <FiLinkedin className="text-xs md:text-lg " />
  ];

  return (
    <div className="min-h-screen flex flex-col px-8 w-full">
      <div className="flex-2 flex flex-col justify-center items-center gap-2 font-serif sm:py-4 sm:border-b border-orange-100">
        <span className="text-center"><b>Alamat:</b> Graha Lorem Ipsum, Jl. Jalani Aja Dulu No.11-13, Gotham City 8678 Konoha</span>
        <span><b>Email:</b> infopublik@lorem.com</span>
      </div>
      <div className="flex-6 flex flex-col md:flex-row px-8">
        {data.map((item, index) => (
          <div className="flex-1 flex flex-col justify-start mt-4" key={index}>
            <span className="font-semibold font-serif py-8">{item.judul}</span>
            <ul className="flex flex-col gap-4 text-sm sm:mb-4">
              {item.isi.map((isiItem, i) => (
                <li className="hover:underline cursor-pointer font-serif" key={i}>{isiItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex-2 border-t border-orange-200 flex justify-between p-8 flex-col md:flex-row gap-4">
        <div className="flex justify-between items-center gap-8 px-8 text-center">
          {icon.map((el, index) => (
            <div className="h-5 w-5 md:h-10  md:w-10 rounded-full border border-orange-300 flex justify-center items-center hover:bg-orange-950 hover:text-orange-100 cursor-pointer " key={index}>
              {el}
            </div>
          ))}
        </div>
        <div className="flex flex-col font-serif text-orange-950 gap-4 md:text-sm text-xs">
          <span> &copy;Copyright PT Sumber Berkah(Persero)2025. All Right Reserved.</span>
            <div className="">
            / <span className="hover:underline hover:text-orange-900 cursor-pointer">Kebijakan Privasi</span> / <span className="hover:underline hover:text-orange-900 cursor-pointer">Waspada Penipuan</span>
            </div>
        </div>
      </div>
    </div>
  )
}
export default footer;