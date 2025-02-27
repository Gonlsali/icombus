import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const PosterFormat = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Poster Format</h1>

        <section className="mb-6">
          <p className="mb-4">
            Design your poster so that it is easy to read and include some
            visuals or charts. Allocate the top of the poster for the title and
            authors’ names and affiliations. Remember the audience may have a
            short time frame to read your poster.
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
            All posters should be based on the submitted abstract as accepted by
            the Scientific Committee.
          </p>
          <p className="mb-4 font-semibold">
            Please bring your poster with you.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PosterFormat;
