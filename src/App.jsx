import NavbarComponent from "./component/NavbarComponent";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
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
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={Testimonialpage} />
        <Route path="/faq" Component={Faq} />
        <Route path="/syaratketen" Component={SyaratKententuan} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

