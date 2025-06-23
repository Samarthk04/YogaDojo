// src/components/Testimonials.tsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Ava",
    text: "The atmosphere is so calming and the instructors are amazing!",
  },
  {
    id: 2,
    name: "Liam",
    text: "I found my favorite Yin class here. Highly recommend.",
  },
  {
    id: 3,
    name: "Sophia",
    text: "Beautiful studio and very welcoming community.",
  },
  {
    id: 4,
    name: "James",
    text: "A truly transformative experience. I leave every class feeling refreshed and centered."
  }
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-20 bg-beige-100 overflow-x-hidden">
    <div className="container mx-auto">
        <h2 className="font-heading text-4xl text-center mb-12">Testimonials</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="lg:w-5/6 xl:w-3/4 mx-auto">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={15}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="!w-4/5 md:!w-3/4">
                  <div className="h-full min-h-[250px] lg:min-h-[300px] bg-white rounded-2xl shadow-lg flex flex-col justify-center items-center font-body text-center p-8 transition-all duration-300">
                    <p className="text-lg lg:text-2xl mb-6 text-charcoal-800">“{t.text}”</p>
                    <p className="font-semibold text-accent text-base lg:text-lg">- {t.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
    </div>
  </section>
);

export default Testimonials;