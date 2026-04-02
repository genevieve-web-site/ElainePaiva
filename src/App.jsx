import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;
