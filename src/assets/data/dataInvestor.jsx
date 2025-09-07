import Tombol from "../components/atoms/button";
import { HiArrowNarrowRight } from "react-icons/hi";

export const dataInvestor = [
  {
    title: "Publikasi Laporan Tahunan",
    tombol: <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-xl" />} />,
    children: [
      {
        gambar: "../public/direktur.jpg",
        title: "Anual Report 2024",
        unduh: "unduh"
      },
      {
        gambar: "../public/direktur.jpg",
        title: "Anual Report 2023",
        unduh: "unduh"
      }
    ]
  },
  {
    title: "Laporan Keuangan",
    tombol: <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-xl" />} />,
    children: [
      {
        title: "Financial Report 2024",
        unduh : "unduh"
      },
      {
        title: "Financial Report 2023",
        unduh : "unduh"
      }
    ]
  }
]