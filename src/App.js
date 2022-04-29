import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ToastContainer />
    </div>
  );
}

export default App;
