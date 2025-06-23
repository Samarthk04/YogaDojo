// src/components/Stats.tsx
import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// Reusable counter component for numbers with a '+'
const Counter: React.FC<{ to: number }> = ({ to }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={nodeRef}>0</span>;
};

// Reusable counter component for exact numbers
const CounterExact: React.FC<{ to: number }> = ({ to }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.round(value).toString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={nodeRef}>0</span>;
};

const stats = [
  { value: 15, label: "Years Of Experience", plus: true },
  { value: 500, label: "Classes Taught", plus: true },
  { value: 150, label: "Satisfied Customers", plus: true },
  { value: 400, label: "Hours of Certified Training", plus: true },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="font-heading text-5xl md:text-6xl text-charcoal-800">
                {stat.plus ? (
                  <>
                    <Counter to={stat.value} />+
                  </>
                ) : (
                  <CounterExact to={stat.value} />
                )}
              </p>
              <p className="text-sage-400 mt-2 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;