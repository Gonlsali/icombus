import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  const formUrl = "https://forms.gle/uB9tQ4kUznuijfAv8";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="py-16 bg-gray-100 flex-grow">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "#365427" }}
          >
            How to Register
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {/* Information Card */}
            <div
              className="rounded-lg shadow-lg overflow-hidden"
              style={{
                background: "linear-gradient(to bottom, #558C3F, #1F4923)",
                width: "100%",
                maxWidth: "560px",
              }}
            >
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Registration Steps</h3>
                <ol className="space-y-2 ml-4 list-decimal">
                  <li>Click the "Register Now" button below</li>
                  <li>Fill in all required information on the Google Form</li>
                  <li>Submit the form by clicking "Submit" at the bottom</li>
                  <li>
                    You'll receive a confirmation email after successful
                    registration
                  </li>
                </ol>
              </div>
            </div>

            {/* Important Info Card */}
            <div
              className="rounded-lg shadow-lg overflow-hidden"
              style={{
                background: "linear-gradient(to bottom, #558C3F, #1F4923)",
                width: "100%",
                maxWidth: "560px",
              }}
            >
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Important Information
                </h3>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Have your personal information ready before starting</li>
                  <li>
                    Registration is open until the deadline specified on the
                    form
                  </li>
                  <li>
                    For any issues, contact our support team at
                    icombus@ciputra.ac.id
                  </li>
                  <li>
                    Registration confirmation will be sent within 24 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="flex justify-center mt-12">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg text-white font-bold text-lg transition-all hover:shadow-lg"
              style={{
                background: "linear-gradient(to right, #558C3F, #1F4923)",
              }}
            >
              Register Now
            </a>
          </div>

          <p className="text-center mt-6 text-gray-600">
            If you're having trouble accessing the form, please contact us at{" "}
            <span className="font-semibold">icombus@ciputra.ac.id</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
