import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { CoursesPage } from "./Pages/CoursesPage";
import { About } from "./Pages/About";
import { ContactPage } from "./Pages/ContactPage";
import { Footer } from "./components/Footer/Footer";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  return (
    <div className="bg-[#F1F1F1]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
