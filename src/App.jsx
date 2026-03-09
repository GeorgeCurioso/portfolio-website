import { BrowserRouter } from "react-router-dom";

import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <main className="relative z-0 bg-primary">

        <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </section>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <section className="relative z-0">
          <Contact />
          <StarsCanvas />
        </section>

      </main>
    </BrowserRouter>
  );
};

export default App;