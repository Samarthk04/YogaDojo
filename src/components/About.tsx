import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import certification images
import rytImg from './Assets/ryt.png';
import rysImg from './Assets/rys.png';
import rpysImg from './Assets/rpys.png';

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  
  // Array of yoga studio images
  const studioImages = [
    "https://images.unsplash.com/photo-1579016749257-3f5205b5e5ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvenklMjB5b2dhJTIwc3R1ZGlvfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D"
  ];

  // Array of certifications with imported images
  const certifications = [
    { name: "RYT 200", path: rytImg },
    { name: "RYS 200", path: rysImg },
    { name: "RPYS", path: rpysImg }
  ];

  // Auto-scroll images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === studioImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [studioImages.length]);

  // Auto-scroll certifications every 4 seconds (only for mobile)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertIndex((prevIndex) => 
        prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [certifications.length]);

  return (
    <section id="about" className="py-20 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl mb-8">About Us</h2>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-6 text-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Meet <strong>Nishi Singh</strong>, the heart and soul of The Yoga Dojo. A dedicated 
            instructor who transitioned from a young athletic background and 
            competitive weightlifting to her true passion—Yoga. After years of hitting 
            the gym and winning competitions, the pandemic became a turning point 
            that led her to the tranquil and transformative world of yoga. Since then, 
            she has committed herself to the yogic path, earning international 
            certifications including the prestigious RYT 200, RYS 200, and RPYS from 
            the Yoga Alliance USA.
          </p>
          
          <p>
            At The Yoga Dojo, we believe yoga is for every body. Our mission is to 
            create a welcoming space where movement, mindfulness, and self-care 
            align harmoniously under expert guidance. Our offerings include not just 
            traditional yoga forms, but also <strong>Face Yoga</strong>—an emerging practice that 
            helps tone facial muscles, boost circulation, and reduce tension to reveal 
            your natural radiance.
          </p>
        </motion.div>

        {/* Photo Carousel */}
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative h-96 md:h-[500px]">
            {studioImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Yoga studio ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentImageIndex ? 1 : 0,
                  scale: index === currentImageIndex ? 1 : 1.05
                }}
                transition={{ duration: 0.8 }}
              />
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {studioImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certifications Section */}
      <div className="mt-8 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-2xl mb-2">Certifications & Credentials</h3>
            <p className="text-base text-gray-600">
              Professionally trained and certified by Yoga Alliance USA
            </p>
          </motion.div>

          {/* Mobile Version - Carousel (hidden on desktop) */}
          <motion.div
            className="block md:hidden max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48">
              {certifications.map((cert, index) => (
                <img
                  key={index}
                  src={cert.path}
                  alt={`${cert.name} Certification`}
                  className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-700 ${
                    index === currentCertIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 pb-4">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCertIndex ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentCertIndex(index)}
                />
              ))}
            </div>
          </motion.div>

          {/* Desktop Version - Side by Side (hidden on mobile) */}
          <motion.div
            className="hidden md:flex justify-center items-center space-x-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 h-32">
                  <img
                    src={cert.path}
                    alt={`${cert.name} Certification`}
                    className="w-full h-full object-contain p-3"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;