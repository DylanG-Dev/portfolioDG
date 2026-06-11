import './App.css';
import 'react-multi-carousel/lib/styles.css';
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Projects } from './components/Projects';
import { Skills } from "./components/Skills";
import { VeilleTechno } from "./components/VeilleTechno";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <VeilleTechno />
      <Footer />
    </div>
  );
}

export default App;