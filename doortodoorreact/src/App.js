import logo from './logo.svg';
import './App.css';
import Home from './Clientsite/Home';
import { BrowserRouter, Routes, Route, MemoryRouter } from 'react-router-dom';
import Header from './Clientsite/Header';
import Footer from './Clientsite/Footer';
import Service from './Clientsite/Service';
import Getservice from './Clientsite/Getservice';
import About from './Clientsite/About';
import Login from './Clientsite/Login';
import Signup from './Clientsite/Signup';
import Profile from './Clientsite/Profile';
import Myservice from './Clientsite/Myservice';



function App() {
  return (
    <MemoryRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service/:id' element={<Getservice />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/edit/:id' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/myservice' element={<Myservice />} />
      </Routes>
      <Footer />
    </MemoryRouter>
  );
}

export default App;
