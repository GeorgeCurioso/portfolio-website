import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <main className="relative z-0 bg-primary text-white-100">

        {/* HERO SECTION */}
        <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center border-b border-black-200">
          <Navbar />
          <Hero />
        </section>

        {/* MAIN CONTENT */}
        <div className="bg-primary">

          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

        </div>

        {/* CONTACT SECTION */}
        <section className="relative z-0 border-t border-black-200">
          <Contact />
          <StarsCanvas />
        </section>

      </main>
    </BrowserRouter>
  );
};

export default App;