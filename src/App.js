import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Inventory from './Components/Inventory/Inventory';
import LogIn from './Components/LogIn/LogIn';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<RequireAuth>
          <Inventory/>
        </RequireAuth>} />
        <Route path='/logIn' element={<LogIn/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
