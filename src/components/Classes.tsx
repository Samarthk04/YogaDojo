import React from "react";
import { motion } from "framer-motion";

import oneOnOneBannerImg from "./Assets/1on1.jpg";
import onlineClassBannerImg from "./Assets/OnlineClasses.jpg";

// Data derived from YogaPackages.csv file
const classPackages = [
 {
  type: "Yoga",
  title: "Weekday Batches",
  schedule: "Monday to Friday",
  timings: {
   morning: "7:00 - 8:00 AM, 8:15 - 9:15 AM",
   evening: "5:00 - 6:00 PM",
  },
  price: "₹2500",
  imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop", 
 },
 {
  type: "Yoga",
  title: "Weekend Batches",
  schedule: "Saturday to Sunday",
  timings: {
   morning: "7:00 - 9:00 AM",
   evening: "5:00 - 7:00 PM",
  },
  price: "₹2000",
  imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop",
 },
 {
  type: "Yoga",
  title: "Full Week Batches",
  schedule: "Monday to Sunday",
  timings: {
   morning: "7:00 - 8:00 AM, 8:15 - 9:15 AM",
   evening: "5:00 - 6:00 PM, 6:15 - 7:15 PM",
  },
  price: "₹3500",
  imageUrl: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1926&auto=format&fit=crop", 
 },
 {
  type: "Face Yoga",
  title: "Face Yoga Sessions",
  schedule: "Monday to Saturday",
  timings: {
   morning: "9:15 - 9:40 AM",
   evening: "4:30 - 5:00 PM",
  },
  price: "₹2500",
  imageUrl: "https://plus.unsplash.com/premium_photo-1664528917247-3aafcb6fd104?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxmYWNlJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D", 
 },
];

const Classes: React.FC = () => {
 return (
  <section id="classes" className="pb-20 bg-beige-100">
    <div className="container mx-auto px-4 pt-8">
      <h2 className="text-4xl md:text-5xl font-heading text-center text-charcoal-800 mb-12">
        Explore Our Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {classPackages.map((pkg, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col font-body transform hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-heading text-charcoal-800 mb-2">{pkg.title}</h3>
              <p className="text-charcoal-800/80 mb-4">{pkg.schedule}</p>
              <div className="text-sm text-charcoal-800/90 mb-4">
                <p><strong>Morning:</strong> {pkg.timings.morning}</p>
                <p><strong>Evening:</strong> {pkg.timings.evening}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-charcoal-800/10 flex justify-between items-center">
                <p className="text-2xl font-body text-accent">{pkg.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ==================== 1-on-1 Banner (Text on Right) ==================== */}
    <motion.div
        className="relative mt-16 container mx-auto rounded-2xl overflow-hidden min-h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${oneOnOneBannerImg})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
    >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative w-full md:w-1/2 p-8 md:p-12 text-white text-left"> 
            <h3 className="font-body text-3xl md:text-4xl">1-on-1 Personal Training</h3>
            <p className="mt-4 text-lg">
                Get personalized attention and a customized yoga plan tailored to your specific goals and needs. Available on demand.
            </p>
            <a
                href="#contact"
                className="inline-block mt-6 px-8 py-3 bg-white text-charcoal-800 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
                Inquire Now
            </a>
        </div>
    </motion.div>

    {/* ==================== Online Classes Banner (Text on Left) ==================== */}
    <motion.div
        className="relative mt-16 container mx-auto rounded-2xl overflow-hidden min-h-[400px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${onlineClassBannerImg})` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
    >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative w-full md:w-1/2 p-8 md:p-12 text-white text-left">
            <h3 className="font-body text-3xl md:text-4xl">Live Online Classes</h3>
            <p className="mt-4 text-lg">
                Practice from the comfort of your home with our live, interactive online sessions. Join our community from anywhere.
            </p>
            <a
                href="#contact"
                className="inline-block mt-6 px-8 py-3 bg-white text-charcoal-800 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
                Learn More
            </a>
        </div>
    </motion.div>
  </section>
 );
};

export default Classes;