import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t-2 border-green-800 bg-white p-8 text-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* Contact Information */}
        <div className="space-y-1">
          <p className="font-bold">Contact Person:</p>
          <p>John (+62 812 345 6789)</p>
          <p>Email: icombus@ciputra.ac.id</p>
        </div>

        {/* Hosted By Section */}
        <div className="text-center flex flex-col items-center">
          <p className="font-bold mb-4">Hosted by</p>
          <Image
            src="/logoSU.png"
            alt="Student Union International Business Management"
            width={300}  // Adjust based on actual logo size
            height={100} // Adjust based on actual logo size
            priority
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;