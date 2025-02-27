import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const CallPaper = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Call for Papers</h1>

        {/* Section 1: Deskripsi Umum */}
        <section className="mb-8">
          <p className="mb-4">
            The 1st International Conference on Management and Business Strategy
            which will be held online on <strong>30 May 2025</strong> in
            Surabaya, Indonesia, is the premier forum for the presentation of
            new advances and research results in education theory and practice.
          </p>
          <p className="mb-4">
            This conference is a prestigious event, organized to provide an
            international platform for academicians, researchers, managers,
            industrial participants, and students to share their research
            findings with global experts. All full paper submissions will be
            peer-reviewed and evaluated based on originality, technical and/or
            research depth, accuracy, and relevance to conference themes and
            topics.
          </p>
        </section>

        {/* Section 2: Important Deadlines */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Important Deadlines</h2>
          <p className="mb-4">
            Authors will be notified of Abstract acceptance within 7 to 14 days.
            The optional full paper submission, including detailed guidelines
            for publication in Conference Proceedings, peer-reviewed journals,
            or as a Monograph, will be emailed within a few weeks after the
            conference.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Abstract Submission Deadline:</strong> April 10, 2025
            </li>
            <li>
              <strong>Full Paper Submission Deadline:</strong> April 30, 2025
            </li>
            <li>
              <strong>Presentation Material Submission Deadline:</strong> May
              10, 2025
            </li>
            <li>
              <strong>Conference Dates:</strong> 30 May, 2025
            </li>
          </ul>
        </section>

        {/* Section 3: Topik dan Kriteria */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="mb-4">
            The conference is seeking submissions related to the following
            conference topics:{" "}
            <strong>Management, Economics, Business, Finance</strong>. Other
            related tracks and topics will also be considered.
          </p>
          <p className="mb-4">
            Submitted abstracts will be evaluated by the Scientific Committee.
            All submissions should report original and previously unpublished
            research results no matter the type of research paper you are
            presenting. Manuscripts should meet the format set by the Conference
            committee and are subject to review. Detailed instructions and full
            paper submission guidelines will be emailed within a few weeks
            following the conference.
          </p>
        </section>

        {/* Section 4: Submission Info */}
        <section className="mb-8">
          <ul className="list-disc ml-6 mb-4">
            <li>
              Please submit your papers via the{" "}
              <a
                href="#"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ONLINE SUBMISSION FORM
              </a>
              .
            </li>
            <li>
              For more information about the conference, you are welcome to
              contact the organizing committee directly via{" "}
              <a
                href="mailto:info@icbmeconf.org"
                className="text-blue-600 underline"
              >
                info@icbmeconf.org
              </a>
              .
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CallPaper;
