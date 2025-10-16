import './App.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { VeilleTechno } from "./components/VeilleTechno";
import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <About />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Skills />
      <br></br>
      <br></br>
      <Projects />
      <br></br>
      <br></br>
      <VeilleTechno />
      <br></br>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;