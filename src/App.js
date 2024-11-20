import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentContainer from './components/ContentContainer/ContentContainer';
import { HeroEnergy } from './components/Hero_Energy/hero_section';
import { TiposEnergeticos } from './components/TiposdeEnergia/Energias';
import SplashScreen from './Splash';
import {Duplas} from './components/Dualiadade/seisDuplas'
import Pratica from './components/Pratica/Pratica';

function App() {
  return (
    <Router>
      <div className="App">
        <SplashScreen />
        <Header />
        <ContentContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
