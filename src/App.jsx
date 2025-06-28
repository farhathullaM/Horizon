import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { CoursesPage } from "./Pages/CoursesPage";
import { About } from "./Pages/About";
import { ContactPage } from "./Pages/ContactPage";
import { Footer } from "./components/Footer/Footer";
import { ErrorPage } from "./Pages/ErrorPage";
import { Whatsapp } from "./components/ui/Whatsapp";
import OpenSchool from "./Pages/OpenSchool";
import SkillProgram from "./Pages/SkillProgram";
import University from "./Pages/University";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="bg-[#F1F1F1]">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/openschool" element={<OpenSchool />} />
        <Route path="/skillprogram" element={<SkillProgram />} />
        <Route path="/university/:id" element={<University />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
