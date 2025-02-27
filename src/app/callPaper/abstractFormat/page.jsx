import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const AbstractFormat = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Abstract Format</h1>

        <section className="mb-6">
          <p className="mb-4">
            You are invited to submit your abstract to the 1st International
            Conference on Management and Business Strategy, May 30, 2025 in
            Surabaya, Indonesia. Please send your abstract for evaluation by the
            organizing Scientific Committee and if the abstract is accepted, the
            author(s) can register for the Conference. After the conference, the
            full paper will be requested for subsequent publication
            opportunities. Otherwise, your abstract only will be published in
            the Proceeding.
          </p>
          <p className="mb-4">
            Download the abstract template for submission details:
            <br />
            <a
              href="/ICOMBUS-Abstract-Format.docx"
              download
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ICOMBUS-Abstarct-Format.docx
            </a>{" "}
            <em>(click link)</em>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AbstractFormat;
