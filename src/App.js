import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Works/Work";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
