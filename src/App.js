import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Vibranium } from './components/VibraniumBI/Vibranium';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Vibranium />
      </div>
    </Router>
  );
}

export default App;
