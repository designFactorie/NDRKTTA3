import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Approach from "@/pages/Approach";
import Courses from "@/pages/Courses";
import Admissions from "@/pages/Admissions";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Router basename="/NDRKTTA3">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
