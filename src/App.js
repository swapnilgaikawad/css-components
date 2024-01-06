import ProductContainer from './components/ProductContainer';
import './App.css';
import Product from './components/Product';
import 'bootstrap/dist/css/bootstrap.min.css'
import Student from './components/Student';
import Navbar from './components/Navbar';
import Home from './components/componentsold/Home';
import About from './components/componentsold/About';
import Contact from './components/Contact';
import Education from './components/componentsold/Education';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Projects from './components/Projects';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />}/>
         <Route path='/about' element={ <About />}/>
          <Route path='/education' element={<Education />}/>
          <Route path='/contact'element={<Contact />}/>
          <Route path='/projects'element={<Projects />}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
