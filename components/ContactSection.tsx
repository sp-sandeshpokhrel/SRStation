import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <div className=" md:mx-8 my-8">
      <div className="py-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Large Screen */}
          <div className="hidden lg:flex lg:flex-wrap lg:justify-between w-full max-w-3xl">
            <div className="w-1/2 mb-4 lg:mb-0">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">123 Street, City</p>
              <p className="text-gray-700">Phone: 123-456-7890</p>
              <p className="text-gray-700">Email: example@example.com</p>
            </div>
            <div className="w-1/2">
              <div className="flex justify-center lg:justify-end">
                <FaFacebook className="text-3xl text-blue-500 hover:text-blue-600 cursor-pointer mr-4" />
                <FaWhatsapp className="text-3xl text-green-500 hover:text-green-600 cursor-pointer mr-4" />
              </div>
            </div>
          </div>

          {/* Medium and Small Screen */}
          <div className="lg:hidden">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">123 Street, City</p>
            <p className="text-gray-700">Phone: 123-456-7890</p>
            <p className="text-gray-700">Email: example@example.com</p>
            <div className="flex justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
              >
                Facebook
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
