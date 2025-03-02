// components/ImportantDates.jsx
import Image from "next/image";

const importantDates = [
  {
    date: "10 April 2025",
    description: "Abstract Submission Deadline",
  },
  {
    date: "30 April 2025",
    description: "Full Paper Submission Deadline",
  },
  {
    date: "10 May 2025",
    description: "Presentation Material Submission Deadline",
  },
  {
    date: "30 May 2025",
    description: "Conference Date",
  },
];

export default function ImportantDates() {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        {/* Event logo above the header */}
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Event Logo" width={500} height={200} />
        </div>

        {/* Header with custom color */}
        <h2
          className="text-3xl font-bold text-center mb-12 py-12"
          style={{ color: "#365427" }}
        >
          IMPORTANT DATES
        </h2>

        <div className="relative" style={{ minHeight: "200px" }}>
          {/*
            ====================================
            BAR UNTUK DESKTOP/TABLET (>= md)
            ====================================
          */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 hidden md:block"
            style={{
              top: "38px", // sejajar lingkaran besar (100/70)
              width: "100%",
              maxWidth: "1200px",
              height: "24px",
              borderRadius: "20px",
              background: "linear-gradient(to right, #214B23, #FFD449)",
            }}
          ></div>

          {/*
            ====================================
            BAR UNTUK MOBILE (< md)
            ====================================
          */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 block md:hidden"
            style={{
              top: "24px", // sejajar lingkaran kecil (64/40)
              width: "90vw",
              maxWidth: "600px",
              height: "16px",
              borderRadius: "8px",
              background: "linear-gradient(to right, #214B23, #FFD449)",
            }}
          ></div>

          {/* Timeline items */}
          <div className="relative flex justify-between items-start mt-10">
            {importantDates.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{ width: "25%" }}
              >
                {/* LINGKARAN BESAR (desktop/tablet) */}
                <div
                  className="hidden md:flex items-center justify-center"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100px",
                    height: "100px",
                    backgroundColor: "#FFD449",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "#214B23",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>

                {/* LINGKARAN KECIL (mobile) */}
                <div
                  className="flex md:hidden items-center justify-center"
                  style={{
                    position: "relative",
                    zIndex: 10,
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#FFD449",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#214B23",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>

                {/* Date & Description */}
                <div className="mt-4 text-center">
                  <p className="font-bold text-base md:text-lg text-black">
                    {item.date}
                  </p>
                  <p className="text-base md:text-lg text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
