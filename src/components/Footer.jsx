import Image from "next/image";

const Footer = () => {
  // Definisikan path dan alt text untuk logo Co-Host
  const coHostLogos = [
    {
      src: "/images/Logo_Universitas_Sanata_Dharma.svg.png",
      alt: "Universitas Sanata Dharma",
      width: 150,
      height: 80,
    },
    {
      src: "/images/universitas_atma_jaya.png",
      alt: "Universitas Atma Jaya Yogyakarta",
      width: 110,
      height: 100,
    },
    {
      src: "/images/logo-unpak_menu_web.webp",
      alt: "Universitas Pakuan",
      width: 110,
      height: 100,
    },
    {
      src: "/images/Logo_Universitas_Muhammadiyah_Tangerang.png",
      alt: "Universitas Muhammadiyah Tangerang",
      width: 110,
      height: 100,
    },
    {
      src: "/images/Logo_Universitas_Padjadjaran.png",
      alt: "Universitas Padjadjaran",
      width: 110,
      height: 100,
    },
  ];

  return (
    <footer className="bg-white text-black">
      {/* Garis hijau di bagian atas */}
      <div style={{ backgroundColor: "#1F4923", height: "4px" }} />

      <div className="container mx-auto p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Hosted by</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          {" "}
          {/* Tambah margin bawah di sini */}
          {/* Universitas Ciputra Logo */}
          <div className="flex-1 flex justify-center max-w-xs md:max-w-sm">
            {" "}
            {/* Batasi lebar maks */}
            <Image
              src="/logoUC.png"
              alt="Universitas Ciputra"
              width={350}
              height={100}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Student Union Logo */}
          <div className="flex-1 flex justify-center max-w-xs md:max-w-sm">
            {" "}
            {/* Batasi lebar maks */}
            <Image
              src="/logoSU.png"
              alt="Student Union International Business Management"
              width={250}
              height={100}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Co-Hosted by Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">Co-Hosted by</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10">
          {coHostLogos.map((logo, index) => (
            <div key={index} className="p-2">
              {" "}
              {/* Tambahkan padding jika perlu */}
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
        {/* End of Co-Hosted by Section */}

        {/* Contact Information */}
        <div
          className="mt-8 rounded-full py-4 px-8 text-white text-center max-w-lg mx-auto"
          style={{
            background: "linear-gradient(to right, #1F4923, #558C3F)",
          }}
        >
          <p className="font-medium">Contact Person:</p>
          <p className="font-bold">Jean (WA: +62 822 2897 1236)</p>
          <p className="font-bold">Jonathan (WA: +62 857 9588 2313)</p>
          <p className="font-bold">Email: icombus@ciputra.ac.id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
