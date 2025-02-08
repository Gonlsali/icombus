import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Data rundown (sama seperti contoh sebelumnya)
const rundownData = [
  { start: "08:30", end: "09:00", duration: "0:30:00", venue: "Main Room", activity: "Open gate" },
  { start: "09:00", end: "09:05", duration: "0:05:00", venue: "Main Room", activity: "Opening" },
  { start: "09:05", end: "09:07", duration: "0:02:00", venue: "Main Room", activity: "Opening Prayer" },
  { start: "09:07", end: "09:10", duration: "0:03:00", venue: "Main Room", activity: "Singing National Anthem" },
  { start: "09:10", end: "09:13", duration: "0:03:00", venue: "Main Room", activity: "Singing Hymne UC" },
  { start: "09:13", end: "09:16", duration: "0:03:00", venue: "Main Room", activity: "The head of ICOMBUS speech" },
  { start: "09:16", end: "09:19", duration: "0:03:00", venue: "Main Room", activity: "President of IBM Student Union speech" },
  { start: "09:19", end: "09:22", duration: "0:03:00", venue: "Main Room", activity: "Vice Head Department of IBM Major speech" },
  { start: "09:22", end: "09:24", duration: "0:02:00", venue: "Main Room", activity: "Rundown reading" },
  { start: "09:24", end: "09:26", duration: "0:02:00", venue: "Main Room", activity: "MC Time" },
  { start: "09:26", end: "10:06", duration: "0:40:00", venue: "Main Room", activity: "First Speaker session" },
  { start: "10:06", end: "10:09", duration: "0:03:00", venue: "Main Room", activity: "MC Time" },
  { start: "10:09", end: "10:49", duration: "0:40:00", venue: "Main Room", activity: "Second Speaker session" },
  { start: "10:49", end: "10:52", duration: "0:03:00", venue: "Main Room", activity: "MC Time" },
  { start: "10:52", end: "11:32", duration: "0:40:00", venue: "Main Room", activity: "Third Speaker session" },
  { start: "11:32", end: "11:34", duration: "0:02:00", venue: "Main Room", activity: "MC Time" },
  { start: "11:34", end: "12:04", duration: "0:30:00", venue: "Main Room", activity: "Discussion" },
  { start: "12:04", end: "12:07", duration: "0:03:00", venue: "Main Room", activity: "MC Time" },
  { start: "12:07", end: "13:07", duration: "1:00:00", venue: "Main Room", activity: "Break" },
  { start: "13:07", end: "13:10", duration: "0:03:00", venue: "Main Room", activity: "MC Time" },
  { start: "13:10", end: "18:10", duration: "5:00:00", venue: "Break Out Room", activity: "Break out room session" },
  { start: "18:10", end: "18:12", duration: "0:02:00", venue: "Main Room", activity: "MC Time" },
  { start: "18:12", end: "18:15", duration: "0:03:00", venue: "Main Room", activity: "Closing" },
  { start: "18:15", end: "18:17", duration: "0:02:00", venue: "Main Room", activity: "Documentation" },
  { start: "18:17", end: "18:20", duration: "0:03:00", venue: "Main Room", activity: "Closing Prayer" },
];

const Rundown = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      {/* 
        max-w-5xl: Pada layar besar, lebarnya max 5xl (bisa diganti 6xl).
        mx-auto: Supaya konten center di layar besar.
        px-4 sm:px-6 lg:px-8: Padding menyesuaikan device.
        py-8: Jarak atas-bawah.
      */}
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Bagian judul & info */}
        <div className="text-left mb-8">
          {/* Logo */}
          <div className="py-4">
            <Image
              src="/logo.png"
              alt="ICOMBUS logo"
              width={200}
              height={50}
              priority
            />
          </div>

          {/* Judul */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#345327]">
            Rundown
          </h1>
          <p className="text-gray-600 font-semibold">Online: Zoom</p>
          <p className="text-gray-600 font-semibold mb-4">Date: 4 April 2025</p>

          <a
            href="/Rundown_Icombus.pdf" // path file PDF di dalam folder public
            download // attribute HTML untuk mengunduh file
            className="
              inline-block
              bg-gradient-to-r from-[#345327] to-[#A3953B]
              text-white py-2 px-6
              rounded-lg
              transition-colors
              hover:opacity-90"
          >
            Download ICOMBUS Rundown
          </a>

        </div>

        {/* Tabel rundown */}
        {/* overflow-x-auto supaya tabel bisa di-scroll horizontal di layar kecil */}
        <div className="overflow-x-auto">
          {/* 
            text-xs sm:text-sm md:text-base: 
            - text-xs di mobile
            - text-sm di layar agak besar
            - text-base di layar medium ke atas
          */}
          <table className="min-w-full border border-[#1F4923] text-left text-xs sm:text-sm md:text-base">
            <thead className="bg-[#1F4923] text-white">
              <tr>
                <th className="p-3 border-r border-[#1F4923]">Start</th>
                <th className="p-3 border-r border-[#1F4923]">End</th>
                <th className="p-3 border-r border-[#1F4923]">Duration</th>
                <th className="p-3 border-r border-[#1F4923]">Venue</th>
                <th className="p-3">Activity</th>
              </tr>
            </thead>
            <tbody className="text-black">
              {rundownData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-[#1F4923]">{item.start}</td>
                  <td className="p-3 border-b border-[#1F4923]">{item.end}</td>
                  <td className="p-3 border-b border-[#1F4923]">{item.duration}</td>
                  <td className="p-3 border-b border-[#1F4923]">{item.venue}</td>
                  <td className="p-3 border-b border-[#1F4923]">{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Rundown;
