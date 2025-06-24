import React from "react";
// Importing more professional, outlined icons
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2"; // MapPin added
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-charcoal-800 text-beige-100 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        {/* Social and Contact Icons with Hover Effect */}
        <div className="flex justify-center items-center gap-4 group">
          <a
            href="+919899788315"
            aria-label="Call Us"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <HiOutlinePhone className="text-xl" />
          </a>
          <a
            href="mailto:singhnishi415@gmail.com"
            aria-label="Email Us"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <HiOutlineEnvelope className="text-xl" />
          </a>
          <a
            href="https://wa.me/7838746124"
            aria-label="Chat on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          {/* Location Icon Added Here */}
          <a
            href="https://maps.app.goo.gl/F1V6VhbvoPmawSDh7" // <-- IMPORTANT
            aria-label="View on Google Maps"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <HiOutlineMapPin className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/kar_yoga_dojo?igsh=c2lzdHk5YXBkeDBy"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <AiOutlineInstagram className="text-xl" />
          </a>
        </div>

        {/* Contact Link */}
        <div>
          <a
            href="tel:+919899788315"
            className="uppercase tracking-widest text-sm hover:text-accent transition-colors duration-300 font-body"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 font-body">
          <p>© {new Date().getFullYear()} YogaDojo Studio. All Rights Reserved.</p>
          <p>Sector 23, Gurgaon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;