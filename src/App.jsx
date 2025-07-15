import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { CoursesPage } from "./Pages/CoursesPage";
import { About } from "./Pages/About";
import { ContactPage } from "./Pages/ContactPage";
import { ErrorPage } from "./Pages/ErrorPage";
import OpenSchool from "./Pages/OpenSchool";
import SkillProgram from "./Pages/SkillProgram";
import University from "./Pages/University";
import ScrollToTop from "./utils/ScrollToTop";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import Universities from "./Pages/Admin/Universities";
import Courses from "./Pages/Admin/Courses";
import FAQs from "./Pages/Admin/FAQs";
import Testimonials from "./Pages/Admin/Testimonials";
import Blogs from "./Pages/Admin/Blogs";
import Contacts from "./Pages/Admin/Contacts";
import Applications from "./Pages/Admin/Applications";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Faq from "./Pages/Faq";
import Blog from "./Pages/Blog";
import Apply from "./Pages/Apply";
import Suggestions from "./Pages/Admin/Suggestions";
import Users from "./Pages/Admin/Users";

function App() {
  return (
    <div className="bg-[#F1F1F1]">
      <ScrollToTop />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="openschool" element={<OpenSchool />} />
          <Route path="skillprogram" element={<SkillProgram />} />
          <Route path="university/:id" element={<University />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="apply" element={<Apply />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Universities />} />
          <Route path="courses" element={<Courses />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="applications" element={<Applications />} />
          <Route path="suggestions" element={<Suggestions />} />
          <Route path="users" element={<Users />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
