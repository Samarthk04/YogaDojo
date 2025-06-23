import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Ava",
    text: "The atmosphere is so calming and the instructors are amazing!",
    rating: 5
  },
  {
    id: 2,
    name: "Liam",
    text: "I found my favorite Yin class here. Highly recommend.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia",
    text: "Beautiful studio and very welcoming community.",
    rating: 4
  }
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-20 container mx-auto px-4">
    <h2 className="font-heading text-4xl text-center mb-10">Testimonials</h2>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Swiper
        spaceBetween={30}
        loop
        autoplay={{ delay: 5000 }}
        className="max-w-2xl"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id} className="p-6 bg-white rounded-xl shadow-lg">
            <p className="text-lg italic mb-4">“{t.text}”</p>
            <p className="font-semibold">{t.name}</p>
            <div className="flex gap-1 mt-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </section>
);

export default Testimonials;
