import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Vibranium } from './components/VibraniumBI/Vibranium';
import Plataforma from './components/Plataforma/Plataforma';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Vibranium /> */}
        <Plataforma/>
        <Footer />
        
    </div>
    </Router>
  );
}

export default App;
