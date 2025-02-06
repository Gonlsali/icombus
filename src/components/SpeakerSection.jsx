// components/SpeakerSection.jsx
import Image from "next/image";

const speakers = [
  {
    name: "Professor Dennis Cheek",
    title: "Dean, School of Entrepreneurship and Humanities Ciputra University Surabaya",
    image: "/speaker1.jpg", // Ensure your images are in the public folder
    bio: "Professor & Dean, former CEO, Chief Learning Officer (for both a for profit and a nonprofit), CFO, researcher, and global consultant with expertise and wide experience in elementary, secondary, and higher education, nonprofits (including foundations and public and private universities), corporations, startups, and state and national governments. Co-founder of 14 international and national organizations including the international Campbell Collaboration (Oslo, Norway), Asia Centre for Social Entrepreneurship and Philanthropy (Singapore), and the US-based National Creativity Network Inc. (NCN) and Career Cornerstone Center Inc. (STEM career pathways). Author, contributor, or editor of over 850 publications, technical reports, book reviews, and multimedia products; service on editorial or manuscript review boards for 21 peer-reviewed journals and 9 practitioner publications. Co-editor and co-founder, Journal of Entrepreneurship & Public Policy, former editor, Journal of Technology Studies.",
  },
  {
    name: "Speaker Two",
    title: "CTO, Tech Innovators",
    image: "/speaker2.jpg",
    bio: "A visionary technologist driving digital transformation.",
  },
  {
    name: "Speaker Three",
    title: "COO, Business Solutions",
    image: "/speaker3.jpg",
    bio: "Expert in operations and strategy with years of industry experience.",
  },
];

const SpeakerSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 
        className="text-3xl font-bold text-center mb-12"
        style={{ color: "#365427" }}
        >
        Speakers
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden"
              style={{
                background: "linear-gradient(to bottom, #558C3F, #1F4923)",
                width: "290px",
                height: "560px",
              }}
            >
              {/* Image Section */}
              <div className="relative" style={{ height: "280px", width: "100%" }}>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content Section */}
              <div className="p-6 text-white" style={{ height: "280px" }}>
                <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                <p className="text-l mb-4">{speaker.title}</p>
                <p className="text-sm">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
