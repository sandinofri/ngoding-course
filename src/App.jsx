import NavbarComponent from "./component/NavbarComponent";
import Footer from "./component/Footer";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import Faq from "./component/Faq";
import Testimonialpage from "./pages/Testimonialpage";
import SyaratKententuan from "./pages/SyaratKententuan";
function App() {
  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path="*" element={<HomePage/>} />
        <Route path="/kelas" element={<KelasPage/>} />
        <Route path="/testimonial" element={<Testimonialpage/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/syaratketen" element={<SyaratKententuan/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

