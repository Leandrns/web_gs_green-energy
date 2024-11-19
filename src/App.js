import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Vibranium from './components/Vibranium/Vibranium';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Vibranium />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
