import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Footer from './components/Contact/Footer';
import Education from './components/Education/Education';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Project from './components/Projects/Project';
import Skills from './components/Skils/Skils';
import Work from './components/Work/Work';
import Lyout from './Lyout';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">


      { (1) ? (
          <Header />
      ) : (
         <ErrorPage />
      )}

        
        <Routes>
          <Route path="/" element={<Lyout />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Footer />} />
    
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Contact />
      
      </div>
    </Router>
  );
}

export default App;

