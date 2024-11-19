import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Vibranium } from './components/VibraniumBI/Vibranium';
import { HeroEnergy } from './components/Hero_Energy/hero_section';
import { TiposEnergeticos } from './components/TiposdeEnergia/Energias';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroEnergy/>
        <TiposEnergeticos/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
