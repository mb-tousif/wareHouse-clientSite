import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Inventory from './Components/Inventory/Inventory';
import LogIn from './Components/LogIn/LogIn';
import Footer from './Components/Footer/Footer';
import ManageInventory from './Components/manageInventory/ManageInventory';
import Register from './Components/Register/Register';
import Blogs from './Components/Blogs/Blogs';
import PageNotFound from './Components/page-404/PageNotFound';
import AddInstrument from './Components/AddInstrument/AddInstrument';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addItems" element={<AddInstrument/>} />
        <Route path="/inventory" element={<RequireAuth>
          <Inventory/>
        </RequireAuth>}/>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/manageInventory" element={<RequireAuth>
          <ManageInventory />
        </RequireAuth>}/>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
