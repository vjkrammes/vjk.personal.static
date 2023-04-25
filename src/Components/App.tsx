import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Providers
import { AlertProvider } from "../Contexts/AlertContext";
// Pages
import AboutPage from "./About/AboutPage";
import BeansPage from "./Beans/BeansPage";
import CatalistPage from "./Catalist/CatalistPage";
import ContactPage from "./Contact/ContactPage";
import DemosPage from "./Demos/DemosPage";
import HomePage from "./Home/HomePage";
import JimCoPage from "./JimCo/JimCoPage";
import LedgerPage from "./Ledger/LedgerPage";
import NotFoundPage from "./NotFound/NotFoundPage";
import PrivacyPage from "./Privacy/PrivacyPage";
import ResumePage from "./Resume/ResumePage";
import SkillsPage from "./Skills/SkillsPage";
import VJKPage from "./VJK/VJKPage";
import XtrakrPage from "./Xtrakr/XtrakrPage";
// Miscellaneous
import AlertPopup from "./Widgets/Alert/AlertPopup";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
// CSS
import "./App.css";

export default function App() {
  return (
    <AlertProvider>
      <Router>
        <header>
          <Header />
        </header>
        <div className="page">
          <Routes>
            {/* map the empty route, "/" and "/Home" all to the home page */}
            {["", "/", "/Home"].map((path, index) => {
              return (
                <Route
                  path={path}
                  element={
                    <>
                      <AlertPopup />
                      <HomePage />
                    </>
                  }
                  key={index}
                />
              );
            })}
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Beans" element={<BeansPage />} />
            <Route path="/Catalist" element={<CatalistPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Demos" element={<DemosPage />} />
            <Route path="/JimCo" element={<JimCoPage />} />
            <Route path="/Ledger" element={<LedgerPage />} />
            <Route path="/Privacy" element={<PrivacyPage />} />
            <Route path="/Resume" element={<ResumePage />} />
            <Route path="/Skills" element={<SkillsPage />} />
            <Route path="/VJK" element={<VJKPage />} />
            <Route path="/Xtrakr" element={<XtrakrPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
      </Router>
    </AlertProvider>
  );
}
