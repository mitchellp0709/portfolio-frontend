
import './App.css';
//import components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom"
//import pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';


function App() {

  const URL = "https://jmitchellpaoletti-portfolio.herokuapp.com/";






  return (
    <h1>
      Site under maintenance. In the meantime, please check out my{" "}
      <a href="https://www.linkedin.com/in/mitchell-paoletti-067325168/">
        LinkedIn
      </a>{" "}
      and <a href="https://github.com/mitchellp0709">Github</a>!
    </h1>
    // <>
    //   <div className="App">
    //     <Header />

    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/projects" element={<Projects URL={URL} />} />
    //       <Route exact path="/about" element={<About URL={URL} />} />
    //     </Routes>
    //     <Footer />
    //   </div>
    // </>
  );
}

export default App;
