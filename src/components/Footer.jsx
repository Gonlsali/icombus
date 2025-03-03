import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white p-8 text-black">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Hosted by</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Universitas Ciputra Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/logoUC.png"
              alt="Universitas Ciputra"
              width={350}
              height={100}
              priority
            />
          </div>

          {/* Student Union Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/logoSU.png"
              alt="Student Union International Business Management"
              width={250}
              height={100}
              priority
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-green-800 rounded-full py-4 px-8 text-white text-center max-w-lg mx-auto">
          <p className="font-medium">Contact Person:</p>
          <p className="font-bold">John (+62 812 345 6789)</p>
          <p className="font-bold">Email: icombus@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
