// components/SpeakerSection.jsx
import Image from "next/image";

const speakers = [
  {
    name: "Professor Dennis Cheek",
    title: "Dean, School of Entrepreneurship and Humanities Ciputra University Surabaya",
    image: "/speaker1.jpg", // Ensure your images are in the public folder
  },
  {
    name: "Speaker Two",
    title: "CTO, Tech Innovators",
    image: "/speaker2.jpg",
  },
  {
    name: "Speaker Three",
    title: "COO, Business Solutions",
    image: "/speaker3.jpg",
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
