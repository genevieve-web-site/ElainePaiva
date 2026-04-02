import Hero from "../componentes/Hero";
import Latest from "../componentes/LatestArticles";
import Blog from "../componentes/Blog";
import Alisamentos from "../componentes/Alisamentos";
import About from "../componentes/About";
import Insta from "../componentes/insta";
import Footer from "../componentes/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Latest />
      <Blog />
      <Alisamentos />
      <About />
      <Insta />
    </>
  );
}

export default Home;
