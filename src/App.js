import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ContentContainer from './components/ContentContainer/ContentContainer';
import SplashScreen from './Splash';


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
