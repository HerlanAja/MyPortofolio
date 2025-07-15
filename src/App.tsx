import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import About from './page/About';
import Services from './page/Services';
import Skils from './page/Skils';
import Projects from './page/project';
import Footer from './components/Footer';
import TestimonialCard from './page/Testimonial';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <Router>
        <main className="relative z-10 pt-20">
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <About />
                <Services />
                <Skils />
                <Projects />
                <TestimonialCard />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
