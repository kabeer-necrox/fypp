import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp'; 
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DarkVariantExample from './components/DarkVariantExample';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={ < Aboutus/>}/>
          <Route path='/update' element={<h1>update component</h1>} />
          <Route path='/SignUp' element={<SignUp />} />
          {/* <Route path="/team" element={<DarkVariantExample />}/> */}
          <Route path="/contactus" element={<Contactus />}/>
          

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
