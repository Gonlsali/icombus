import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const PosterFormat = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* Header dengan asset.jpg */}
      <header className="relative w-full h-64 md:h-96">
        <Image
          src="/images/asset.jpg"
          alt="Header Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black opacity-40" />
        {/* Teks judul */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Poster Format
          </h1>
        </div>
      </header>

      {/* Konten utama */}
      <main className="max-w-4xl mx-auto px-4 py-8 -mt-10 md:-mt-20 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <section className="mb-6">
            <p className="mb-4">
              Design your poster so that it is easy to read and include some
              visuals or charts. Allocate the top of the poster for the title
              and authors’ names and affiliations. Remember the audience may
              have a short time frame to read your poster.
            </p>
            <p className="mb-4">
              Poster size should be A1 international paper size. Materials,
              including the title, should not extend beyond the poster size.
            </p>
            <p className="mb-4">
              Do not use foam core or any thick or multi-layered materials or
              pushpins directly on the poster boards. Please make sure that the
              material used for the poster allows it to be posted on the boards.
            </p>
            <p className="mb-4">
              All posters should be based on the submitted abstract as accepted
              by the Scientific Committee.
            </p>
            <p className="mb-4 font-semibold">
              Please bring your poster with you.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PosterFormat;
