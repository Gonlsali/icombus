// components/SpeakerSection.jsx
import Image from "next/image";

const speakers = [
  {
    name: "Speaker One",
    title: "CEO, Example Company",
    image: "/speaker1.jpg", // Place your speaker images in the public folder
    bio: "An experienced leader in the industry with a passion for innovation.",
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
        <h2 className="text-3xl font-bold text-center mb-12">Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden"
              style={{
                background: "linear-gradient(to bottom, #558C3F, #1F4923)",
              }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                <p className="text-sm mb-4">{speaker.title}</p>
                <p className="text-base">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
