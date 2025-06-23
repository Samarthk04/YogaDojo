import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "./assets/download.png";

const sections = [
  { to: "about",        label: "About" },
  { to: "classes",      label: "Classes" },
  { to: "testimonials", label: "Testimonials" },
  { to: "contact",      label: "Contact" },
];

const menuVariants = {
  hidden: {
    x: "100%",
    transition: { type: "tween", duration: 0.3 },
  },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.3 },
  },
};

const NavBar: React.FC = () => {
  const [open,  setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-navbar/80 backdrop-blur-sm shadow-md font-body"
        // RE-ADDED: Animation props for the initial slide-down effect
        initial={{ y: -100 }} // Start 100px above the viewport
        animate={{ y: 0 }}      // Animate to its final position
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
      >
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-1">
          {/* Logo always LEFT */}
          <ScrollLink
            to="hero"
            smooth
            duration={500}
            offset={-70}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <img src={logo} alt="Yoga logo"
              className="h-14 w-14 md:h-16 md:w-16 select-none" />
          </ScrollLink>

          {/* Links (desktop) & hamburger (mobile) on RIGHT */}
          <div className="flex items-center gap-4">
            {/* desktop links */}
            <ul className="hidden md:flex gap-8 font-body font-semibold">
              {sections.map((s) => (
                <li key={s.to}>
                  <ScrollLink
                    to={s.to}
                    smooth
                    duration={500}
                    offset={-70}
                    className="cursor-pointer hover:text-accent"
                  >
                    {s.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay remains the same */}
      <AnimatePresence>
        {open && (
         <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
          />
          
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 h-full w-3/4 bg-navbar z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded text-charcoal-800 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>
              
              <ul className="flex flex-col text-center font-body text-xl text-charcoal-800 divide-y divide-charcoal-800/20">
                {sections.map((s) => (
                  <li key={s.to} className="py-4">
                    <ScrollLink
                      to={s.to}
                      smooth
                      duration={500}
                      offset={-70}
                      onClick={() => setOpen(false)}
                      className="block cursor-pointer hover:text-accent"
                    >
                      {s.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;