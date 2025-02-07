import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Rundown = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <main className="flex-grow max-w-screen-lg mx-auto px-4 py-8">
        {/* Bagian judul & info */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Rundown
          </h1>
          <p className="text-gray-600">Online: Zoom</p>
          <p className="text-gray-600 mb-4">Date: 4 April 2025</p>

          {/* Tombol download */}
          <button
            className="bg-[#5D6C3F] hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-md transition-colors"
          >
            Download ICOMBUS Rundown
          </button>
        </div>

        {/* Tabel rundown */}
        <div className="overflow-x-auto">
          <table className="w-full border border-[#5D6C3F] text-left">
            <thead>
              <tr className="bg-[#5D6C3F] text-white">
                <th className="p-3 border-r border-white">Time</th>
                <th className="p-3">Agenda</th>
              </tr>
            </thead>
            <tbody>
              {/* Contoh beberapa baris, silakan duplikasi sesuai kebutuhan */}
              {Array.from({ length: 12 }).map((_, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border-b border-[#5D6C3F]">11.00</td>
                  <td className="p-3 border-b border-[#5D6C3F]">
                    Lorem Ipsum
                  </td>
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

export default Rundown
