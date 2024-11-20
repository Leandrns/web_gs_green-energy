import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentContainer from './components/ContentContainer/ContentContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ContentContainer />
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
