import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Treatments } from "./components/Treatments";
import { Differentials } from "./components/Differentials";
import { Reviews } from "./components/Reviews";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Treatments />
      <Differentials />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
