import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Classes />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
};

export default App;
