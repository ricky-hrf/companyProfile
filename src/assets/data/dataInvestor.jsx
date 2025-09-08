import Tombol from "../components/atoms/button";
import { HiArrowNarrowRight } from "react-icons/hi";

export const dataInvestor = [
  {
    title: "Publikasi Laporan Tahunan",
    tombol: <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-xl" />} />,
    children: [
      {
        gambar: "../public/laporan1.jpg",
        title: "Anual Report 2024",
        unduh: "unduh"
      },
      {
        gambar: "../public/laporan2.jpg",
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
      },
      {
        title: "Financial Report 2022",
        unduh : "unduh"
      }
    ]
  },
  {
    title: "Presentasi",
    tombol: <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-xl" />} />,
    children: [
      {
        title: "Performance Full Year 2024",
        unduh : "unduh"
      },
      {
        title: "Performance Full Year 2023",
        unduh : "unduh"
      },
      {
        title: "Performance Full Year 2022",
        unduh : "unduh"
      }
    ]
  },
  {
    title: "Corporate Newsletter",
    tombol: <Tombol text="Selengkapnya" icon={<HiArrowNarrowRight className="text-xl" />} />,
    children: [
      {
        title: "Corporate Newsletter Update Edition January 2024",
        unduh : "unduh"
      },
      {
        title: "Corporate Newsletter Update Edition February 2024",
        unduh : "unduh"
      },
      {
        title: "Corporate Newsletter Update Edition March 2024",
        unduh : "unduh"
      },
    ]
  }
]